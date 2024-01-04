import { BasicQuery } from "./basicQuery";

export interface Area {
  id: number;
  name: string;
}

export interface AddArea {
  name: string;
}

export interface UpdateArea {
  name: string;
}

export interface AreaQuery extends BasicQuery {}
