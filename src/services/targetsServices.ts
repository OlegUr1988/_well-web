import { AddTarget, Target, UpdateTarget } from "../entities/targets";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const targets = new APIClient<Target>("/targets", setTokenHeader);
export const addTarget = new APIClient<AddTarget>("/targets", setTokenHeader);
export const updateTarget = new APIClient<UpdateTarget>(
  "/targets",
  setTokenHeader
);
