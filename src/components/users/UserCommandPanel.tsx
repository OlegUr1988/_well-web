import CommandPanel from "../CommandPanel";
import UserCreateButton from "./UserCreateButton";

const UserCommandPanel = () => {
  return <CommandPanel createButton={<UserCreateButton />} />;
};

export default UserCommandPanel;
