import { Heading } from "@chakra-ui/react";
import AssetForm from "../components/AssetForm";

const NewAssetPage = () => {
  return (
    <>
      <Heading mb={10}>Create a new asset</Heading>

      <AssetForm />
    </>
  );
};

export default NewAssetPage;
