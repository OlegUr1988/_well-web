import { BasicQuery } from "./basicQuery";
import { Unit } from "./units";

export interface PHDTag {
  id: number;
  tagname: string;
  unitId: number;
  unit: Unit;
}

export interface AddPHDTag {
  tagname: string;
  unitId: number;
}

export interface UpdatePHDTag {
  tagname: string;
  unitId: number;
}

export interface PHDTagQuery extends BasicQuery {}
