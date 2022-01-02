import {createContext, useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

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
    const response = await fetch('http://localhost:5000/feedback?_sort=rating&_order=desc');
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Actually update the feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => (item.id === id) ? {...item, ...updatedItem } : item))
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    })
  }

  // Remove feedback item
  const deleteFeedback = (id) => { 
    //console.log(`App to delete number ${id}`) 
    if (window.confirm('Are you sure you want to delete this item?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    };
  }

  // Add feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
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