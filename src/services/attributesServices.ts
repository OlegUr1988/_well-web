import {
  AddAttribute,
  Attribute,
  UpdateAttribute,
} from "../entities/attributes";
import APIClient from "./api-client";

export const attributes = new APIClient<Attribute>("/attributes");
export const addAttribute = new APIClient<AddAttribute>("/attributes");
export const updateAttribute = new APIClient<UpdateAttribute>("/attributes");
