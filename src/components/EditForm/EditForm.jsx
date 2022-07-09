import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import { SearchFormStyled, FormBtn, InputSearch } from 'components';
import { BtnEdit } from './EditForm.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { editTodo } from '../../redux/todosSlice';

export const EditForm = ({ currentTodo, onCancel, onSubmit }) => {
  const [value, setValue] = useState(currentTodo.text);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { id } = currentTodo;
    dispatch(editTodo({ id, text: value }));
    onSubmit();
  };

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <BtnEdit type="button" onClick={onCancel}>
        <MdOutlineCancel size="16px" color="red" />
      </BtnEdit>

      <FormBtn type="submit">
        <RiSaveLine size="16px" color="green" />
      </FormBtn>

      <InputSearch
        onChange={e => setValue(e.currentTarget.value)}
        placeholder="EDIT TODO"
        name="edit"
        required
        value={value}
        autoFocus
      />
    </SearchFormStyled>
  );
};
