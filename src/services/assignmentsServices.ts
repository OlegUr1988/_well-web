import {
  AddAssignment,
  Assignment,
  UpdateAssignment,
} from "../entities/assignments";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const assignments = new APIClient<Assignment>(
  "/assignments",
  setTokenHeader
);
export const addAssignment = new APIClient<AddAssignment>(
  "/assignments",
  setTokenHeader
);
export const updateAssignment = new APIClient<UpdateAssignment>(
  "/assignments",
  setTokenHeader
);
