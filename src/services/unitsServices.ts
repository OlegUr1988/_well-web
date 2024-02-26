import { AddUnit, Unit, UpdateUnit } from "../entities/units";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const units = new APIClient<Unit>("/units", setTokenHeader);
export const addUnit = new APIClient<AddUnit>("/units", setTokenHeader);
export const updateUnit = new APIClient<UpdateUnit>("/units", setTokenHeader);
