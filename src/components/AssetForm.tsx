import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import useCreateAsset from "../hooks/useCreateAsset";
import { assetSchema } from "../validationSchema";
import { toast } from "react-toastify";

type FormData = z.infer<typeof assetSchema>;

const AssetForm = () => {
  const createAsset = useCreateAsset();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(assetSchema) });

  const onSubmit = async (data: FormData) => {
    try {
      await createAsset.mutateAsync(data);
      toast.success("A new asset was created");
      navigate("/config/assets", { replace: true });
    } catch (error) {
      const { message } = error as Error;
      toast.error(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl mb={5} isRequired isInvalid={!!errors.name}>
        <FormLabel>Asset Name</FormLabel>
        <Input w={400} placeholder="name" {...register("name")} />
        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
      </FormControl>

      <Button colorScheme="blue" type="submit">
        Create
      </Button>
    </form>
  );
};

export default AssetForm;
