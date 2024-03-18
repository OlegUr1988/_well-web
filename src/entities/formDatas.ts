import { z } from "zod";
import {
  PHDTagSchema,
  assetSchema,
  assignmentSchema,
  changeUserPasswordSchema,
  constantShcema,
  dataSourceSchema,
  listViewFormSchema,
  loginSchema,
  registerUserSchema,
  updateTargetSchema,
  updateUserSchema,
} from "../validationSchema";

export type ListViewFormData = z.infer<typeof listViewFormSchema>;

export type PHDTagFormData = z.infer<typeof PHDTagSchema>;

export type AssetFormData = z.infer<typeof assetSchema>;

export type AssignmentFormData = z.infer<typeof assignmentSchema>;

export type DataSourceFormData = z.infer<typeof dataSourceSchema>;

export type LoginFormData = z.infer<typeof loginSchema>;

export type ChangeUserPasswordFormData = z.infer<
  typeof changeUserPasswordSchema
>;

export type UpdateUserFormData = z.infer<typeof updateUserSchema>;

export type RegisterUserFormData = z.infer<typeof registerUserSchema>;

export type UpdateTargetFormData = z.infer<typeof updateTargetSchema>;

export type ConstantFormData = z.infer<typeof constantShcema>;
