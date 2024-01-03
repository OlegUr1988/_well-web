import { BasicQuery } from "./basicQuery";
import { Asset } from "./assets";

export interface Equipment {
  id: number;
  name: string;
  assetId: number;
  asset: Asset;
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
