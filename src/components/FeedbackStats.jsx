import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext);
  let average = feedback.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.rating / feedback.length
  }, 0); // 0 = default value for accumulator
  average = Math.ceil(average * 10) / 10;
  return (
    <div className="feedback-stats">
      <h3>{feedback.length} Reviews</h3>
      <p>Average rating: {isNaN(average) ? 0 : average}</p>
    </div>
  );
};

export default FeedbackStats;
