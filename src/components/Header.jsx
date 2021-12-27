import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Header( { textProp, bgColor, textColor }) {

  const headerStyles = {
    backgroundColor: bgColor, color: textColor
  }

  return (
    <header style={headerStyles}>
      <div className="container">
        <h1>{textProp}</h1>
      </div>
      <ul className='ulNav'>
        <li>
          <NavLink to='/' activeclassname='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' activeclassname='active'>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' activeclassname='active'>
            Contact
          </NavLink>
        </li>
      </ul>
    </header>
  )
}

Header.defaultProps = {
  textProp: 'Feedback App',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95'
}

Header.propTypes = {
  textProp: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
