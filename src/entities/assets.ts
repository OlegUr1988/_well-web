import { BasicQuery } from "./basicQuery";

export interface Asset {
  id: number;
  name: string;
  parentAssetId: number;
  children: Asset[];
}

export interface AddAsset {
  id?: number;
  name: string;
  parentAssetId?: number;
}

export interface UpdateAsset {
  name: string;
  parentAssetId?: number;
}

export interface AssetQuery extends BasicQuery {
  name?: string;
}
