import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, setTodos }) => {
  return (
    <li>
      <input type='checkbox' />
      {itemProp.title}
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default TodoItem;
