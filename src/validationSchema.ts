import { z } from "zod";

export const assetSchema = z.object({
  name: z
    .string()
    .min(5, "Name should be at least 5 character")
    .max(255, "More than 255 characters"),
});
