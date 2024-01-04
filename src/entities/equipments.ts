import { Area } from "./areas";
import { BasicQuery } from "./basicQuery";

export interface Equipment {
  id: number;
  name: string;
  assetId: number;
  asset: Area;
}

export interface AddEquipment {
  name: string;
  assetId: number;
}

export interface UpdateEquipment {
  name: string;
  assetId: number;
}

export interface EquipmentQuery extends BasicQuery {
  assetId?: number;
}
