import { Assignment } from "./assignments";
import { BasicQuery } from "./basicQuery";

export interface Attribute {
  id: number;
  name: string;
  equipmentId: number;
  attributeTypeId: number;
  assignment: Assignment[]
}

export interface AddAttribute {
  name: string;
  equipmentId: number;
  attributeTypeId: number;
}

export interface UpdateAttribute {
  name: string;
  equipmentId: number;
  attributeTypeId: number;
}

export interface AttributeQuery extends BasicQuery {
  equipmentId: number;
}
