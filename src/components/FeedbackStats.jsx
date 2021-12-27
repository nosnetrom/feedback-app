import PropTypes from 'prop-types';

function FeedbackStats({feedback}) {

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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats;
