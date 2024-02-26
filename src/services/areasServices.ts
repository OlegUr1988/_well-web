import { AddArea, Area, UpdateArea } from "../entities/areas";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const areas = new APIClient<Area>("/areas", setTokenHeader);
export const addArea = new APIClient<AddArea>("/areas", setTokenHeader);
export const updateArea = new APIClient<UpdateArea>("/areas", setTokenHeader);
