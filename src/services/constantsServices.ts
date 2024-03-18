import { Constant, UpdateConstant } from "../entities/constants";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const constants = new APIClient<Constant>("/constants", setTokenHeader);
export const updateConstant = new APIClient<UpdateConstant>(
  "/constants",
  setTokenHeader
);
