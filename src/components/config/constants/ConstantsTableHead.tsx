import { Th, Thead, Tr } from "@chakra-ui/react";
import useUserStore from "../../../store/user";

const ConstantsTableHead = () => {
  const user = useUserStore((s) => s.user);

  return (
    <Thead>
      <Tr height={12}>
        <Th textAlign="center">#</Th>
        <Th textAlign="center">Constant</Th>
        <Th textAlign="center">Value</Th>
        {user && <Th textAlign="center"></Th>}
      </Tr>
    </Thead>
  );
};

export default ConstantsTableHead;
