import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { assetSchema } from "../validationSchema";
import { z } from "zod";

type FormData = z.infer<typeof assetSchema>;

const AssetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(assetSchema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
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
