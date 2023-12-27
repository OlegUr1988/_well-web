import { Asset } from "../assets";

export default interface Equipment {
  id: number;
  name: string;
  asset: Asset;
}
