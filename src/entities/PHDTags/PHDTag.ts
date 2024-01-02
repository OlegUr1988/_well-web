import { Unit } from "../units";

export default interface PHDTag {
  id: number;
  tagname: string;
  unitId: number
  unit: Unit
}
