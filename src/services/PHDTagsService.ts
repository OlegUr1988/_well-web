import { PHDTag } from "../entities/PHDTags";
import APIClient from "./api-client";

export const tags = new APIClient<PHDTag>("/phd-tags");
