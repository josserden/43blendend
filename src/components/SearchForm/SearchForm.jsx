import { FiSearch } from 'react-icons/fi';
import { BtnSearch, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = () => {
  return (
    <SearchFormStyled>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <InputSearch placeholder="Search..." name="search" required autoFocus />
    </SearchFormStyled>
  );
};
