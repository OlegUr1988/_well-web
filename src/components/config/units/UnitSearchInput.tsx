import useUnitsStore from "../../../store/unitsStore";
import SearchInput from "../../common/SearchInput";

const UnitSearchInput = () => {
  const { searchedName } = useUnitsStore((s) => s.unitsQuery);
  const setSearchedName = useUnitsStore((s) => s.setSearchedName);
  const setPage = useUnitsStore((s) => s.setPage);

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  return (
    <SearchInput
      placeholder="Search units..."
      defaultValue={searchedName}
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default UnitSearchInput;
