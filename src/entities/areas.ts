import { Asset } from "./assets";
import { BasicQuery } from "./basicQuery";

export interface Area {
  id: number;
  name: string;
  asset: Asset[];
}

export interface AddArea {
  name: string;
}

export interface UpdateArea {
  name: string;
}

export interface AreaQuery extends BasicQuery {
  name?: string;
}
