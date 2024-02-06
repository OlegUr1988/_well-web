import { useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ZodSchema } from "zod";
import { HttpError } from "../../services/api-client";
import useForm from "./useForm";

interface Props<T, K> {
  onSuccessMessage: string;
  redirectPath?: string;
  schema: ZodSchema<any>;
  mutateAsync: (data: K) => Promise<K>;
  onDataMutate: (data: T) => K;
  onSuccess?: () => void;
}

const useFormSubmit = <T extends FieldValues, K>({
  onSuccessMessage,
  redirectPath,
  schema,
  mutateAsync,
  onDataMutate,
  onSuccess,
}: Props<T, K>) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { control, reset, register, handleSubmit, onSubmit, errors } =
    useForm<T>(async (data) => {
      try {
        await mutateAsync(onDataMutate(data));
        toast.success(onSuccessMessage);
        queryClient.invalidateQueries();
        if (onSuccess) onSuccess();
        if (redirectPath) navigate(redirectPath);
      } catch (error) {
        const { response } = error as HttpError;
        toast.error(response?.data.message);
      }
    }, schema);

  return { control, reset, register, handleSubmit, onSubmit, errors };
};

export default useFormSubmit;
