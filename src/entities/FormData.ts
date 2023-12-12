import { z } from "zod";
import {
  assetOptionShema,
  assetSchema,
  equipmentFormSchema,
} from "../validationSchema";

export type AssetFormData = z.infer<typeof assetSchema>;

export type SelectOption = z.infer<typeof assetOptionShema>;

export type EquipmentFormData = z.infer<typeof equipmentFormSchema>;
