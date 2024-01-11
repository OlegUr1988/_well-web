import { Area } from "./areas";
import { BasicQuery } from "./basicQuery";

export interface Asset {
  id: number;
  name: string;
  areaId: number;
  area: Area;
}

export interface AddAsset {
  name: string;
  areaId: number;
}

export interface UpdateAsset {
  name: string;
  areaId: number;
}

export interface AssetQuery extends BasicQuery {
  areaId?: number;
  name?: string;
}
