import { PHDTag } from "./PHDTags";

export interface Assignment {
  partParameterId: number;
  PHDTagId: number;
  PHDTag: PHDTag;
}

export interface AddAssignment {
  partParameterId: number;
  PHDTagId: number;
}

export interface UpdateAssignment {
  PHDTagId: number;
}
