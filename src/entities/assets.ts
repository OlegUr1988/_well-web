import { BasicQuery } from "./basicQuery";

export interface Asset {
  id: number;
  name: string;
}

export interface AddAsset {
  name: string;
}

export interface UpdateAsset {
  name: string;
}

export interface AssetQuery extends BasicQuery {}
