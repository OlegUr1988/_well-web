import {
  AddParameter,
  Parameter,
  UpdateParameter,
} from "../entities/parameters";
import APIClient from "./api-client";

export const parameters = new APIClient<Parameter>("/part-parameters");
export const addParameter = new APIClient<AddParameter>("/part-parameters");
export const updateParameter = new APIClient<UpdateParameter>(
  "/part-parameters"
);
