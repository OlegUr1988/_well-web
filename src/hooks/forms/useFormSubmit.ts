import { useQueryClient } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ZodSchema } from "zod";
import { HttpError } from "../../services/api-client";
import useForm from "./useForm";

interface Props<T, K, V = K> {
  onSuccessMessage: string;
  redirectPath?: string;
  schema: ZodSchema<any>;
  mutateAsync: (data: K) => Promise<V>;
  onDataMutate?: (data: T) => K;
  onSuccess?: (result: V) => void;
}

const useFormSubmit = <T extends FieldValues, K = T, V = K>({
  onSuccessMessage,
  redirectPath,
  schema,
  mutateAsync,
  onDataMutate,
  onSuccess,
}: Props<T, K, V>) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { control, reset, register, handleSubmit, onSubmit, errors } =
    useForm<T>(async (data) => {
      try {
        const mutatedData = onDataMutate
          ? onDataMutate(data)
          : (data as unknown as K);
        const result = await mutateAsync(mutatedData);
        toast.success(onSuccessMessage);
        queryClient.invalidateQueries();
        if (onSuccess) onSuccess(result);
        if (redirectPath) navigate(redirectPath);
      } catch (error) {
        const { response } = error as HttpError;
        toast.error(response?.data.message);
      }
    }, schema);

  return { control, reset, register, handleSubmit, onSubmit, errors };
};

export default useFormSubmit;
