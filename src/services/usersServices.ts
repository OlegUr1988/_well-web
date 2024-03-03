import { ChangeUserPassword, User } from "../entities/users";
import { setTokenHeader } from "../utils/auth";
import APIClient from "./api-client";

export const users = new APIClient<User>("/users", setTokenHeader);
export const changeUserPassword = new APIClient<ChangeUserPassword>(
  "/users",
  setTokenHeader
);
