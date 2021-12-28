import { FaTimes, FaPencilAlt } from 'react-icons/fa';
import {useContext} from 'react';
import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button
        className='edit'
        onClick={() => editFeedback(item)}
      >
        <FaPencilAlt color='darkblue' />
      </button>
      <button 
        className="close" 
        onClick={ () => deleteFeedback(item.id) }
      >
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
