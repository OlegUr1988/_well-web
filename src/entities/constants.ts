import { BasicQuery } from "./basicQuery";

export interface Constant {
  id: number;
  name: string;
  value: number;
}

export interface UpdateConstant {
  value: number;
}

export interface ConstantQuery extends BasicQuery {}
