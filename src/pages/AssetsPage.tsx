import { Container, Heading } from "@chakra-ui/react";
import AssetsTable from "../components/AssetsTable";

const AssetsPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading mb={10}>Assets</Heading>

        <AssetsTable />
      </Container>
    </>
  );
};

export default AssetsPage;
