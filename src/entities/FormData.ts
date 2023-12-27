import { z } from "zod";
import {
  PHDTagSchema,
  assetOptionShema,
  assetSchema,
  equipmentSchema,
  partSchema,
} from "../validationSchema";

export type AssetFormData = z.infer<typeof assetSchema>;

export type SelectOption = z.infer<typeof assetOptionShema>;

export type EquipmentFormData = z.infer<typeof equipmentSchema>;

export type PartFormData = z.infer<typeof partSchema>;

export type PHDTagFormData = z.infer<typeof PHDTagSchema>;
