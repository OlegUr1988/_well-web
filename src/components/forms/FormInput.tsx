// FormInput.tsx
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface Props<T extends FieldValues> {
  type?: "text" | "number";
  label: string;
  placeholder?: string;
  defaultValue?: string | number;
  isRequired?: boolean;
  error: string;
  register: UseFormRegister<T>;
  name: Path<T>;
}

const FormInput = <T extends FieldValues>({
  type = "text",
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
        type={type}
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
