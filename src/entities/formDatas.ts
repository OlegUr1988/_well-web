import { z } from "zod";
import {
  AssignmentSchema,
  DataSourceSchema,
  PHDTagSchema,
  listViewFormSchema,
} from "../validationSchema";

export type ListViewFormData = z.infer<typeof listViewFormSchema>;

export type PHDTagFormData = z.infer<typeof PHDTagSchema>;

export type AssignmentFormData = z.infer<typeof AssignmentSchema>;

export type DataSourceFormData = z.infer<typeof DataSourceSchema>;
