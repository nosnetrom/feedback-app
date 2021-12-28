import { FaEnvelope } from 'react-icons/fa';
import Card from '../components/shared/Card'

function ContactPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>Contact:</h1>
        <p>
          <FaEnvelope />
          <a style={{paddingLeft: '1rem'}} href="mailto:jmoretea6@gmail.com">jmoretea6@gmail.com</a>
        </p>
      </div>
    </Card>
  )
}

export default ContactPage
