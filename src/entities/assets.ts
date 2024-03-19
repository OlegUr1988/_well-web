import { Attribute } from "./attributes";
import { BasicQuery } from "./basicQuery";
import { Target } from "./targets";
import { UtilityType } from "./utilityTypes";

export interface Asset {
  id: number;
  name: string;
  parentAssetId: number;
  utilityTypeId: number;
  attributes: Attribute[];
  children: Asset[];
  utilityType: UtilityType;
  target: Target;
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
