import { PHDTag } from "./PHDTags";

export interface Assignment {
  attributeId: number;
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
