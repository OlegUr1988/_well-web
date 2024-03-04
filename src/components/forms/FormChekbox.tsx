import {
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  value: string;
  defaultChecked?: boolean;
  isRequired?: boolean;
  error: string;
  register: UseFormRegister<T>;
  name: Path<T>;
}

const FormChekbox = <T extends FieldValues>({
  label,
  value = "",
  defaultChecked = false,
  isRequired = false,
  error,
  register,
  name,
}: Props<T>) => {
  return (
    <FormControl mb={5} isInvalid={!!error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Checkbox defaultChecked={defaultChecked} {...register(name)}>
        {value}
      </Checkbox>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormChekbox;
