import { AddPHDTag, PHDTag, UpdatePHDTag } from "../entities/PHDTags";
import APIClient from "./api-client";

export const tags = new APIClient<PHDTag>("/phd-tags");
export const addTag = new APIClient<AddPHDTag>("/phd-tags");
export const updateTag = new APIClient<UpdatePHDTag>("/phd-tags");
export const importPHDTags = new APIClient("/phd-tags/importFromExcel");
