import {
  AddAssignment,
  Assignment,
  UpdateAssignment,
} from "../entities/assignments";
import APIClient from "./api-client";

export const assignments = new APIClient<Assignment>("/assignments");
export const addAssignment = new APIClient<AddAssignment>("/assignments");
export const updateAssignment = new APIClient<UpdateAssignment>("/assignments");
