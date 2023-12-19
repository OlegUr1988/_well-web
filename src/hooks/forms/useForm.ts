import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as useReactForm, FieldValues } from "react-hook-form";
import { ZodSchema } from "zod";

const useForm = <T extends FieldValues>(
  onSubmit: (data: T) => void,
  schema: ZodSchema<any>
) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useReactForm<T>({ resolver: zodResolver(schema) });

  return { control, register, handleSubmit, onSubmit, errors };
};

export default useForm;
