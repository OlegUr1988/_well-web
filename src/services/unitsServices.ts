import { AddUnit, Unit, UpdateUnit } from "../entities/units";
import APIClient from "./api-client";

export const units = new APIClient<Unit>("/units");
export const addUnit = new APIClient<AddUnit>("/units");
export const updateUnit = new APIClient<UpdateUnit>("/units");
