import { Tbody, Td, Tr } from "@chakra-ui/react";
import { Constant } from "../../../entities/constants";
import useConstantsStore from "../../../store/constants";
import useUserStore from "../../../store/user";
import ConstantEditButton from "./ConstantEditButton";

const ConstantsTableBody = ({ constants }: { constants: Constant[] }) => {
  const { page, pageSize } = useConstantsStore((s) => s.constantsQuery);
  const user = useUserStore((s) => s.user);

  return (
    <Tbody>
      {constants?.map((constant, index) => (
        <Tr key={constant.id}>
          <Td textAlign="center">{(page! - 1) * pageSize! + (index + 1)}</Td>
          <Td textAlign="center">{constant.name}</Td>
          <Td textAlign="center">{constant.value}</Td>
          {user && (
            <Td textAlign="center">
              <ConstantEditButton constant={constant} />
            </Td>
          )}
        </Tr>
      ))}
    </Tbody>
  );
};

export default ConstantsTableBody;
