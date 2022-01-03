import {createContext, useState, useEffect} from 'react';

const FeedbackContext = createContext();

// Cheating on the proxy address?
const proxy = 'https://feedback-app-db.herokuapp.com';

export const FeedbackProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`${proxy}/feedback?_sort=rating&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Actually update the feedback item
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(
      `${proxy}/feedback/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedItem)
      }
    );

    const data = await response.json();

    setFeedback(feedback.map((item) => (item.id === id) ? {...item, ...data } : item))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    })
  }

  // Remove feedback item
  const deleteFeedback = async (id) => { 
    if (window.confirm('Are you sure you want to delete this item?')) {
      await fetch(
        `${proxy}/feedback/${id}`,
        {
          method: 'DELETE',
        }
      );
      setFeedback(feedback.filter((item) => item.id !== id));
    };
  }

  // Add feedback item
  const addFeedback = async (newFeedback) => {
    const response = await fetch(
      `${proxy}/feedback`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      }
    );
    const data = await response.json();
    setFeedback([data, ...feedback]);
    // feedback should be IMMUTABLE; so, we spread the elements of feedback and add newFeedback on front.
  }

  return <FeedbackContext.Provider value={{
    feedback: feedback,
    feedbackEdit: feedbackEdit, // the state object
    isLoading: isLoading,
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback,
    editFeedback: editFeedback, // the function
    updateFeedback: updateFeedback,
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;