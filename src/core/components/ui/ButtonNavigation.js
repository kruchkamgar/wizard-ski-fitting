import PropTypes from 'prop-types'

const ButtonNavigation = ({onAction, actionParams}) => {

  const eventObject = { onClick: (event) => {onAction(event.target.value, ...actionParams)} }

  return (
    <div className="navigation buttons">
      <button {...eventObject} value="prev">Previous</button>
      <button {...eventObject} value="next">Next</button>
    </div>
  )
}

ButtonNavigation.propTypes = {
  onAction: PropTypes.func.isRequired }

export default ButtonNavigation
