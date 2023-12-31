import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { useParameters } from "../../hooks/parameters";
import useModelStore from "../../store/model";
import ParameterTypesList from "./ParameterTypesList";

const ParametersSection = () => {
  const { partId } = useModelStore((s) => s.modelQuery);
  const { data: parameters, isLoading, error } = useParameters({ partId });

  if (partId === 0) return null;

  if (error) return null;

  if (isLoading) return <Heading>Loading</Heading>;

  console.log(parameters);
  return (
    <Box mx={5}>
      <Heading>Parameters</Heading>

      <ParameterTypesList parameters={parameters!} />
    </Box>
  );
};

export default ParametersSection;
