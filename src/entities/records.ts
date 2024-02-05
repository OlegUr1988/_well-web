import { PHDTag } from "./PHDTags";
import { BasicQuery } from "./basicQuery";

export interface Record {
  id: number;
  value: string;
  PHDTagId: number;
  timestamp: string;
  PHDTag: PHDTag;
}

export interface RecordQuery extends BasicQuery {
  PHDTagIds?: number[];
}
