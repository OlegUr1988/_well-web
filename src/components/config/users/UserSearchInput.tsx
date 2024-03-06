import useUserStore from "../../../store/user";
import SearchInput from "../../common/SearchInput";

const UserSearchInput = () => {
  const { searchedName } = useUserStore((s) => s.usersQuery);
  const setSearchedName = useUserStore((s) => s.setSearchedName);
  const setPage = useUserStore((s) => s.setPage);

  const handleSearch = (text: string) => {
    setSearchedName(text);
    setPage(1);
  };

  return (
    <SearchInput
      placeholder="Search users..."
      defaultValue={searchedName}
      onSearch={(e) => handleSearch(e)}
    />
  );
};

export default UserSearchInput;
