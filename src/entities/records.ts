import { PHDTag } from "./PHDTags";
import { BasicQuery } from "./basicQuery";

export interface Record {
  id: number;
  value: number;
  PHDTagId: number;
  timestamp: number;
  PHDtag: PHDTag;
}

export interface RecordQuery extends BasicQuery {}
