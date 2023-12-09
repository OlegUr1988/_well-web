import Asset from "./Asset";

export default interface Equipment {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  asset: Asset;
}
