import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  placeholder?: string;
  defaultValue?: string;
  onSearch: (text: string) => void;
}

const SearchInput = ({
  placeholder = "Search...",
  defaultValue = "",
  onSearch,
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          placeholder={placeholder}
          borderRadius={10}
          defaultValue={defaultValue}
          onChange={(e) => onSearch(e.target.value)}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
