import { Box, HStack, Text } from "@chakra-ui/react";
import { Parameter } from "../../entities/parameters";
import useParameterType from "../../hooks/useParameterTypes";
import useModelStore from "../../store/model";
import ParameterCreateButton from "./ParameterCreateButton";
import ParametersList from "./ParametersList";

const ParameterTypesList = ({ parameters }: { parameters: Parameter[] }) => {
  const { partId } = useModelStore((s) => s.modelQuery);

  const { data: types } = useParameterType();
  return (
    <>
      {types?.map((type) => (
        <Box key={type.id} mb={5}>
          <HStack mb={3}>
            <Text fontSize={22}>Prameter type: </Text>
            <Text fontSize={22} fontWeight="bold">
              {type.name}
            </Text>
          </HStack>
          <Box mb={3}>
            <ParameterCreateButton parameterTypeId={type.id} partId={partId} />
          </Box>
          <ParametersList parameters={parameters} typeId={type.id} />
        </Box>
      ))}
    </>
  );
};

export default ParameterTypesList;
