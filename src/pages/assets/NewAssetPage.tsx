import { Heading } from "@chakra-ui/react";
import { NewAssetForm } from "../../components/assets";

const NewAssetPage = () => {
  return (
    <>
      <Heading mb={5}>Create a new asset</Heading>

      <NewAssetForm />
    </>
  );
};

export default NewAssetPage;
