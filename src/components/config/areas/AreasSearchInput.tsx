import useAreaStore from "../../../store/areas";
import SearchInput from "../../common/SearchInput";

const AreasSearchInput = () => {
  const { searchedName } = useAreaStore((s) => s.areaQuery);
  const setSearchedName = useAreaStore((s) => s.setSearchedName);

  const handleSearch = (text: string) => {
    setSearchedName(text);
  };

  return (
    <SearchInput
      placeholder="Search by area..."
      defaultValue={searchedName}
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default AreasSearchInput;
