import { BasicQuery } from "./basicQuery";

export interface Part {
  id: number;
  name: string;
  equipmentId: number;
}

export interface AddPart {
  name: string;
  equipmentId: number;
}

export interface UpdatePart {
  name: string;
  equipmentId: number;
}

export interface PartQuery extends BasicQuery {
  equipmentId: number;
}
