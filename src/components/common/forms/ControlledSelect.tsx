import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { GroupBase, Select, Props as SelectProps } from "chakra-react-select";
import { useState } from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

interface ControlledSelectProps<
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
> extends Omit<SelectProps<Option, IsMulti, Group>, "name" | "defaultValue">,
    UseControllerProps<FormValues> {
  label?: string;
}

/**
 * An attempt to make a reusable chakra-react-select form component
 *
 * @param props - The combined props of the chakra-react-select component and the useController hook
 */
const ControlledSelect = <
  FormValues extends FieldValues = FieldValues,
  Option = unknown,
  IsMulti extends boolean = boolean,
  Group extends GroupBase<Option> = GroupBase<Option>
>({
  name,
  label,
  options,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  ...selectProps
}: ControlledSelectProps<FormValues, Option, IsMulti, Group>) => {
  const {
    field,
    fieldState: { error },
  } = useController<FormValues>({
    name,
    control,
    rules,
    shouldUnregister,
    defaultValue,
  });

  const [selectedValue, setSelectedValue] = useState<Option | null>(
    defaultValue || null
  );

  const handleChange = (newValue: Option | null) => {
    setSelectedValue(newValue);
    field.onChange(newValue);
  };

  return (
    <FormControl label={label} isInvalid={!!error} id={name}>
      {label && <FormLabel>{label}</FormLabel>}
      <Select<Option, IsMulti, Group>
        options={options}
        value={selectedValue}
        onChange={(newValue) => handleChange(newValue as Option | null)}
        {...selectProps}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default ControlledSelect;
