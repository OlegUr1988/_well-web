import AddAsset from "../entities/AddAsset";
import Asset from "../entities/Asset";
import UpdateAsset from "../entities/UpdateAsset";
import APIClient from "./api-client";

export const assets = new APIClient<Asset>("/assets");
export const addAsset = new APIClient<AddAsset>("/assets");
export const updateAsset = new APIClient<UpdateAsset>("/assets");
export const importAssets = new APIClient("/assets/importFromExcel");
