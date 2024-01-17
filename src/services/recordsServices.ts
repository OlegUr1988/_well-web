import APIClient from "./api-client";
import { Record } from "../entities/records";

export const records = new APIClient<Record>("/records");
