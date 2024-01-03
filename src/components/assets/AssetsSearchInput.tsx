import useAssetStore from "../../store/assets";
import SearchInput from "../common/SearchInput";

const AssetsSearchInput = () => {
  const { searchedName } = useAssetStore((s) => s.assetQuery);
  const setSearchedName = useAssetStore((s) => s.setSearchedName);
  const setPage = useAssetStore((s) => s.setPage);

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  return (
    <SearchInput
      placeholder="Search by asset..."
      defaultValue={searchedName}
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default AssetsSearchInput;
