import { AddPart, Part, UpdatePart } from "../entities/parts";
import APIClient from "./api-client";

export const parts = new APIClient<Part>("/parts");
export const addPart = new APIClient<AddPart>("/parts");
export const updatePart = new APIClient<UpdatePart>("/parts");
