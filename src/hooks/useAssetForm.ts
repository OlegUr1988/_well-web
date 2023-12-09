import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { assetSchema } from "../validationSchema";
import { z } from "zod";

export type AssetFormData = z.infer<typeof assetSchema>;

const useAssetForm = (onSubmit: (data: AssetFormData) => void) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssetFormData>({ resolver: zodResolver(assetSchema) });

  return { register, handleSubmit, onSubmit, errors };
};

export default useAssetForm;
