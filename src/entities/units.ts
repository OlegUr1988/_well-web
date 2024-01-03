import { BasicQuery } from "./basicQuery";

export interface Unit {
  id: number;
  name: string;
}

export interface AddUnit {
  name: string;
}

export interface UpdateUnit {
  name: string;
}

export interface UnitQuery extends BasicQuery {}
