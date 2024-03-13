import { Attribute } from "./attributes";
import { BasicQuery } from "./basicQuery";

export interface Asset {
  id: number;
  name: string;
  parentAssetId: number;
  utilityTypeId: number;
  attributes: Attribute[];
  children: Asset[];
}

export interface AddAsset {
  id?: number;
  name: string;
  parentAssetId?: number;
  utilityTypeId: number;
}

export interface UpdateAsset {
  name: string;
  parentAssetId?: number;
  utilityTypeId?: number;
}

export interface AssetQuery extends BasicQuery {
  name?: string;
}
