import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, setTodos }) => {
  
  const handleChange = (id) => {
    setTodos((prevState) =>
    prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    })
  );
  };
  return (
    <li>
      <input type='checkbox' 
      checked={itemProp.completed}
      onChange={() => handleChange(itemProp.id)}/>
      {itemProp.title}
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
  setTodos: PropTypes.func.isRequired,
};
export default TodoItem;
