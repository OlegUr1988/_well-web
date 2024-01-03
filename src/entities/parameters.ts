import { BasicQuery } from "./basicQuery";

export interface Parameter {
  id: number;
  name: string;
  partId: number;
  parameterTypeId: number;
}

export interface AddParameter {
  name: string;
  partId: number;
  parameterTypeId: number;
}

export interface UpdateParameter {
  name: string;
  partId: number;
  parameterTypeId: number;
}

export interface ParameterQuery extends BasicQuery {
  partId: number;
}
