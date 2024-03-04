import { BasicQuery } from "./basicQuery";

export interface User {
  id: number;
  username: string;
  isAdmin: boolean;
  joined_at: string;
}

export interface UpdateUser {
  username: string;
  isAdmin: boolean;
}

export interface ChangeUserPassword {
  password: string;
}

export interface UserQuery extends BasicQuery {}
