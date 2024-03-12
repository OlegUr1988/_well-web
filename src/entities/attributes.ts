import { Assignment } from "./assignments";
import { BasicQuery } from "./basicQuery";

export interface Attribute {
  id: number;
  name: string;
  assetId: number;
  attributeTypeId: number;
  assignment: Assignment[];
}

export interface AddAttribute {
  name: string;
  assetId: number;
  attributeTypeId: number;
}

export interface UpdateAttribute {
  name: string;
  assetId: number;
  attributeTypeId: number;
}

export interface AttributeQuery extends BasicQuery {
  assetId: number;
}
