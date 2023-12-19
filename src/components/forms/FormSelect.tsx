import { Box } from "@chakra-ui/react";
import { Control, FieldValues, Path, PathValue } from "react-hook-form";
import ControlledSelect from "../ControlledSelect";

interface Props<T extends FieldValues, K> {
  label: string;
  placeholder?: string;
  name: Path<T>;
  control: Control<T>;
  options: K[];
  defaultValue?: PathValue<T, Path<T>>;
}

const FormSelect = <T extends FieldValues, K>({
  label,
  placeholder = "",
  name,
  control,
  options,
  defaultValue,
}: Props<T, K>) => {
  return (
    <Box w={400} mb={5}>
      <ControlledSelect<T, K, false>
        name={name}
        control={control}
        label={label}
        placeholder={placeholder}
        options={options}
        defaultValue={defaultValue}
      />
    </Box>
  );
};

export default FormSelect;
