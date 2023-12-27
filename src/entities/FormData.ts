import { z } from "zod";
import {
  PHDTagSchema,
  assetOptionShema,
  assetSchema,
  equipmentSchema,
} from "../validationSchema";

export type AssetFormData = z.infer<typeof assetSchema>;

export type SelectOption = z.infer<typeof assetOptionShema>;

export type EquipmentFormData = z.infer<typeof equipmentSchema>;

export type PHDTagFormData = z.infer<typeof PHDTagSchema>;
