import PropTypes from 'prop-types';

function Button({children, version, type, isDisabled}) {
  return (
    <button
      className={`btn btn-${version}`}
      type={type}
      disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: true,
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
}

export default Button
