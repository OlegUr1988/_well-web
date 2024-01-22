import { PHDTag } from "./PHDTags";
import { Attribute } from "./attributes";

export interface Assignment {
  attributeId: number;
  attribute: Attribute;
  PHDTagId: number;
  PHDTag: PHDTag;
}

export interface AddAssignment {
  attributeId: number;
  PHDTagId: number;
}

export interface UpdateAssignment {
  attributeId: number;
  PHDTagId: number;
}
