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
  error: string;
  register: UseFormRegister<T>;
  name: Path<T>;
}

const FormInput = <T extends FieldValues>({
  label,
  placeholder = "",
  defaultValue = "",
  error,
  register,
  name,
}: Props<T>) => {
  return (
    <FormControl mb={5} isInvalid={!!error}>
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
