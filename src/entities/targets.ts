import { BasicQuery } from "./basicQuery";

export interface Target {
  id: number;
  productionTarget: number;
  energyConsumptionTarget: number;
  specificEnergyConsupmtionTarget: number;
  CO2EmissionTarget: number;
  assetId: number;
}

export interface AddTarget {
  productionTarget: number;
  energyConsumptionTarget: number;
  specificEnergyConsupmtionTarget: number;
  CO2EmissionTarget: number;
  assetId: number;
}

export interface UpdateTarget {
  productionTarget?: number;
  energyConsumptionTarget?: number;
  specificEnergyConsupmtionTarget?: number;
  CO2EmissionTarget?: number;
}

export interface TargetQuery extends BasicQuery {
  assetId: number;
}
