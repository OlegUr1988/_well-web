import { z } from "zod";
import { noSpaces } from "./constants/regexes";

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
    .min(1, "Tagname should be at least 1 character")
    .max(300, "More than 300 characters")
    .regex(noSpaces, "Should not contain spacess"),
  unit: selectSchema,
});

export const assignmentSchema = z.object({
  tag: selectSchema,
});

export const dataSourceSchema = z.object({
  host: z
    .string()
    .min(1, "Tagname should be at least 1 character")
    .max(300, "More than 300 characters")
    .regex(noSpaces, "Should not contain spacess"),
  port: z.coerce.number().min(1, "The port must be possitive value"),
});

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "The username should be at least 3 characters")
    .max(50, "More that 50 characters")
    .regex(noSpaces, "Should not contain spacess"),
  password: z
    .string()
    .min(4, "The password should be at least 4 characters")
    .max(255, "More that 255 characters")
    .regex(noSpaces, "Should not contain spacess"),
});

export const changeUserPasswordSchema = z.object({
  password: z
    .string()
    .min(4, "The password should be at least 4 characters")
    .max(255, "More that 255 characters")
    .regex(noSpaces, "Should not contain spacess"),
});
