import PropTypes from 'prop-types';

const TodoItem = ({ itemProp }) => {
  return (
    <li>
      <input type='checkbox' />
      {itemProp.title}
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.object.isRequired,
};
export default TodoItem;
