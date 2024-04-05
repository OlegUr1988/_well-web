import useConstantsStore from "../../../store/constants";
import useUnitsStore from "../../../store/units";
import { SearchInput } from "../../common";

const ConstantSearchInput = () => {
  const { searchedName } = useConstantsStore((s) => s.constantsQuery);
  const setSearchedName = useUnitsStore((s) => s.setSearchedName);
  const setPage = useConstantsStore((s) => s.setPage);

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  return (
    <SearchInput
      placeholder="Search constants..."
      defaultValue={searchedName}
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default ConstantSearchInput;
