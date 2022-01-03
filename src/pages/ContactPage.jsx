import { FaEnvelope } from 'react-icons/fa';
import Card from '../components/shared/Card'

function ContactPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>Contact:</h1>
        <p>
          <FaEnvelope />
          <span style={{paddingLeft: '1rem'}}>nosnetrom (at) gmail (dot) com</span>
        </p>
      </div>
    </Card>
  )
}

export default ContactPage
