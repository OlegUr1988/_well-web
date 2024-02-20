import { z } from "zod";
import {
  assignmentSchema,
  dataSourceSchema,
  PHDTagSchema,
  listViewFormSchema,
  loginSchema,
} from "../validationSchema";

export type ListViewFormData = z.infer<typeof listViewFormSchema>;

export type PHDTagFormData = z.infer<typeof PHDTagSchema>;

export type AssignmentFormData = z.infer<typeof assignmentSchema>;

export type DataSourceFormData = z.infer<typeof dataSourceSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;
