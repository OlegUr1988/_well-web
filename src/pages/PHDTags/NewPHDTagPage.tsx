import { Heading } from "@chakra-ui/react";
import NewPHDTagForm from "../../components/PHDTags/NewPHDTagForm";

const NewPHDTagPage = () => {
  return (
    <>
      <Heading mb={5}>Create a new PHD tag</Heading>

      <NewPHDTagForm />
    </>
  );
};

export default NewPHDTagPage;
