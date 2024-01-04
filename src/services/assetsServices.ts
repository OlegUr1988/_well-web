import { AddAsset, Asset, UpdateAsset } from "../entities/assets";
import APIClient from "./api-client";

export const assets = new APIClient<Asset>("/assets");
export const addAsset = new APIClient<AddAsset>("/assets");
export const updateAsset = new APIClient<UpdateAsset>("/assets");
