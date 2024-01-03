import usePHDTagStore from "../../store/phdTags";
import SearchInput from "../common/SearchInput";

const PHDTagsSearchInput = () => {
  const { searchedName } = usePHDTagStore((s) => s.PHDTagsQuery);
  const setSearchedName = usePHDTagStore((s) => s.setSearchedName);
  const setPage = usePHDTagStore((s) => s.setPage);

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  return (
    <SearchInput
      placeholder="Search by tagname..."
      defaultValue={searchedName}
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default PHDTagsSearchInput;
