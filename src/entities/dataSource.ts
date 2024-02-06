export interface DataSource {
  id: number;
  host: string;
  port: number;
}

export interface UpdateDataSource {
  host: string;
  port: number;
}
