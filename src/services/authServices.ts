import { Login } from "../entities/auth";
import APIClient from "./api-client";

export const auth = new APIClient<Login>("/auth");
