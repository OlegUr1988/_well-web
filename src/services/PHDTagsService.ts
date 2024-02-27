import { AddPHDTag, PHDTag, UpdatePHDTag } from "../entities/PHDTags";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const tags = new APIClient<PHDTag>("/phd-tags", setTokenHeader);
export const addTag = new APIClient<AddPHDTag>("/phd-tags", setTokenHeader);
export const updateTag = new APIClient<UpdatePHDTag>(
  "/phd-tags",
  setTokenHeader
);
export const importPHDTags = new APIClient(
  "/phd-tags/importFromExcel",
  setTokenHeader
);
