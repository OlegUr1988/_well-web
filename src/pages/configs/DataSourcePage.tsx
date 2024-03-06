import { Container, Heading } from "@chakra-ui/react";
import { DataSourceForm } from "../../components/config/dataSources";

const DataSourcePage = () => {
  return (
    <Container maxW="container.xl">
      <Heading mb={5}>Data Source Configuration</Heading>
      <DataSourceForm />
    </Container>
  );
};

export default DataSourcePage;
