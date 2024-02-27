import { Th, Thead, Tr } from "@chakra-ui/react";
import useUserStore from "../../store/auth";

const PHDTagsTableHead = () => {
  const user = useUserStore((s) => s.user);

  return (
    <Thead>
      <Tr height={12}>
        <Th textAlign="center">#</Th>
        <Th textAlign="center">Tagname</Th>
        <Th textAlign="center">Units</Th>
        {user && <Th textAlign="center"></Th>}
        {user && <Th textAlign="center"></Th>}
      </Tr>
    </Thead>
  );
};

export default PHDTagsTableHead;
