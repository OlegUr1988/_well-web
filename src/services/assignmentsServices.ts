import {
  AddAssignment,
  Assignment,
  UpdateAssignment,
} from "../entities/Assignment";
import APIClient from "./api-client";

export const assignments = new APIClient<Assignment>("/assignments");
export const addAssignment = new APIClient<AddAssignment>("/assignments");
export const updateAssignment = new APIClient<UpdateAssignment>("/assignments");
