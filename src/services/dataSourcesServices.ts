import { DataSource, UpdateDataSource } from "../entities/dataSource";
import APIClient from "./api-client";

export const dataSources = new APIClient<DataSource>("/data-sources");
export const updateDataSource = new APIClient<UpdateDataSource>(
  "/data-sources"
);
