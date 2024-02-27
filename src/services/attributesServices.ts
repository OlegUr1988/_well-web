import {
  AddAttribute,
  Attribute,
  UpdateAttribute,
} from "../entities/attributes";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const attributes = new APIClient<Attribute>(
  "/attributes",
  setTokenHeader
);
export const addAttribute = new APIClient<AddAttribute>(
  "/attributes",
  setTokenHeader
);
export const updateAttribute = new APIClient<UpdateAttribute>(
  "/attributes",
  setTokenHeader
);
