import {useState} from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card'
import Button from './shared/Button';

function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true);
      setMessage('Please enter at least 10 characters.')
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      const newFeedback = {
        text: text, // or, since key and value are the same, newFeedback = {text, rating,}
        rating: rating,
      }
      handleAdd(newFeedback);
      setText(''); // clear out text input
      setBtnDisabled(true); // reset submit button
      setRating();
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
