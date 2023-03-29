import propTypes from 'prop-types'
import Button from '../button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button onClick={onAdd} color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}/>
     </div>
  )
}

Header.defaultProps = {
    title: "Task Tracker"
}
Header.propTypes = {
    title: propTypes.string.isRequired
}
export default Header
