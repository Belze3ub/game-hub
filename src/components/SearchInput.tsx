import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../gameQueryStore';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (searchRef.current) {
          setSearchText(searchRef.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          type="text"
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
