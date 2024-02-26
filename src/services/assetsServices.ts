import { AddAsset, Asset, UpdateAsset } from "../entities/assets";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const assets = new APIClient<Asset>("/assets", setTokenHeader);
export const addAsset = new APIClient<AddAsset>("/assets", setTokenHeader);
export const updateAsset = new APIClient<UpdateAsset>(
  "/assets",
  setTokenHeader
);
