import { z } from "zod";

export const assetSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name should be at least 1 character")
    .max(255, "More than 255 characters"),
});

export const assetOptionShema = z.object({
  label: z.string(),
  value: z.number(),
});

export const equipmentSchema = z.object({
  name: z.string().min(1).max(255),
});

export const PHDTagSchema = z.object({
  tagname: z
    .string()
    .trim()
    .min(1, "Tagname should be at least 1 character")
    .max(300, "More than 300 characters"),
  description: z.string(),
});
