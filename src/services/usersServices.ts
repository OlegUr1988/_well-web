import { User } from "../entities/users";
import APIClient from "./api-client";

export const users = new APIClient<User>("/users");
