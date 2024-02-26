import {
  AddEquipment,
  Equipment,
  UpdateEquipment,
} from "../entities/equipments";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const equipments = new APIClient<Equipment>(
  "/equipments",
  setTokenHeader
);
export const addEquipment = new APIClient<AddEquipment>(
  "/equipments",
  setTokenHeader
);
export const updateEquipment = new APIClient<UpdateEquipment>(
  "/equipments",
  setTokenHeader
);
