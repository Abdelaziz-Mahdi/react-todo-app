import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  
  return (
    <li>
      <input type='checkbox' 
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}/>
      <button onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default TodoItem;
