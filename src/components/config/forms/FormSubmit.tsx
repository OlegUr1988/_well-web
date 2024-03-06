import { Button } from "@chakra-ui/react";

interface Props {
  label: string;
  isDisabled?: boolean;
}

const FormSubmit = ({ label, isDisabled = false }: Props) => {
  return (
    <Button isDisabled={isDisabled} colorScheme="blue" type="submit">
      {label}
    </Button>
  );
};

export default FormSubmit;
