import { z } from "zod";

export const listViewFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name should be at least 1 character")
    .max(255, "More than 255 characters"),
});

export const selectSchema = z.object({
  label: z
    .string()
    .min(1, "Name should be at least 1 character")
    .max(255, "More than 255 characters"),
  value: z.number().min(1),
});

export const PHDTagSchema = z.object({
  tagname: z
    .string()
    .trim()
    .min(1, "Tagname should be at least 1 character")
    .max(300, "More than 300 characters"),
  unit: selectSchema,
});

export const AssignmentSchema = z.object({
  tag: selectSchema,
});

export const DataSourceSchema = z.object({
  host: z
    .string()
    .trim()
    .min(1, "Tagname should be at least 1 character")
    .max(300, "More than 300 characters"),
  port: z.coerce.number().min(1, "The port must be possitive value"),
});
