import { Text } from 'components';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todosSlice';

export const Todo = ({ text, counter, onEdit, id, disabled }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    onEdit({ id, text });
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={handleDelete} disabled={disabled}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>

        <EditButton type="button" onClick={handleEdit} disabled={disabled}>
          <RiEdit2Line size={24} />
        </EditButton>
      </TodoWrapper>
    </>
  );
};
