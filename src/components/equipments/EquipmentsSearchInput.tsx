import useEquipmentStore from "../../store/equipments";
import SearchInput from "../common/SearchInput";

const EquipmentsSearchInput = () => {
  const { searchedName } = useEquipmentStore((s) => s.equipmentQuery);
  const setSearchedName = useEquipmentStore((s) => s.setSearchedName);
  const setPage = useEquipmentStore((s) => s.setPage);

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  return (
    <SearchInput
      placeholder="Search by equipment or asset..."
      defaultValue={searchedName}
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default EquipmentsSearchInput;
