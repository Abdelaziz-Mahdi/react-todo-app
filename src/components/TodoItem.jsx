import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange  }) => {

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
  handleChange: PropTypes.func.isRequired,
};
export default TodoItem;
