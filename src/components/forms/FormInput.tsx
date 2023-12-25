// FormInput.tsx
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  placeholder?: string;
  defaultValue?: string;
  isRequired?: boolean;
  error: string;
  register: UseFormRegister<T>;
  name: Path<T>;
}

const FormInput = <T extends FieldValues>({
  label,
  placeholder = "",
  defaultValue = "",
  isRequired = false,
  error,
  register,
  name,
}: Props<T>) => {
  return (
    <FormControl mb={5} isInvalid={!!error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input
        w={400}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name)}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
