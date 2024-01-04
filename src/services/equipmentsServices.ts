import {
  AddEquipment,
  Equipment,
  UpdateEquipment,
} from "../entities/equipments";
import APIClient from "./api-client";

export const equipments = new APIClient<Equipment>("/equipments");
export const addEquipment = new APIClient<AddEquipment>("/equipments");
export const updateEquipment = new APIClient<UpdateEquipment>("/equipments");
