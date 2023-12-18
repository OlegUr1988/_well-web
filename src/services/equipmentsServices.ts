import AddEquipment from "../entities/AddEquipment";
import Equipment from "../entities/Equipment";
import UpdateEquipmnet from "../entities/UpdateEquipment";
import APIClient from "./api-client";

export const equipments = new APIClient<Equipment>("/equipments");
export const addEquipment = new APIClient<AddEquipment>("/equipments");
export const updateEquipment = new APIClient<UpdateEquipmnet>("/equipments");
export const importEquipments = new APIClient("/equipments/importFromExcel");
