import { AddParameter, Parameter, UpdateParameter } from "../entities/parameters";
import APIClient from "./api-client";

export const parameters = new APIClient<Parameter>("/parts");
export const addParameter = new APIClient<AddParameter>("/parts");
export const updateParameter = new APIClient<UpdateParameter>("/parts");
