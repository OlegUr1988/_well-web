import useAssetStore from "../../store/assets";
import SearchInput from "../SearchInput";

const AssetsSearchInput = () => {
  const setSearchedName = useAssetStore((s) => s.setSearchedName);
  const setPage = useAssetStore((s) => s.setPage);

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };
  return (
    <SearchInput
      placeholder="Search by asset..."
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default AssetsSearchInput;
