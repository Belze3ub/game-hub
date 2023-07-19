import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form  onSubmit={(e) => {
      e.preventDefault()
      if(searchRef.current) {
        onSearch(searchRef.current.value)
      }
      }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input type="text" placeholder="Search games..." borderRadius={20} variant='filled' ref={searchRef}/>
      </InputGroup>
    </form>
  );
}
export default SearchInput