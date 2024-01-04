import { AddArea, Area, UpdateArea } from "../entities/areas";
import APIClient from "./api-client";

export const areas = new APIClient<Area>("/areas");
export const addArea = new APIClient<AddArea>("/areas");
export const updateArea = new APIClient<UpdateArea>("/areas");
