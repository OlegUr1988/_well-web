import _ from "lodash";
import { Asset } from "../entities/assets";
import useGetUtilityTypes from "./useGetUtilityTypes";
import useGetRecords from "./useGetRecords";
import { getSumOfRecords } from "../utils/records";
import donutChartOptions from "../constants/donutChartOtions";

const useGetConsumptionsByUtility = (assets: Asset[]) => {
  const types = useGetUtilityTypes();

  // Get Gas assignments
  const gasAssets = types["gas"]
    ? assets.filter((asset) => asset.utilityTypeId === types["gas"].id)
    : [];
  const gasAttributes = _.flatten(gasAssets.map((asset) => asset.attributes));
  const gasAssignments = _.flatten(
    gasAttributes.map((attr) => attr.assignments)
  );

  // Get Steam assignments
  const steamAssets = types["steam"]
    ? assets.filter((asset) => asset.utilityTypeId === types["steam"].id)
    : [];
  const steamAttributes = _.flatten(
    steamAssets.map((asset) => asset.attributes)
  );
  const steamAssignments = _.flatten(
    steamAttributes.map((attr) => attr.assignments)
  );

  // Get Electricity assignments
  const electricityAssets = types["electricity"]
    ? assets.filter((asset) => asset.utilityTypeId === types["electricity"].id)
    : [];
  const electricityAttributes = _.flatten(
    electricityAssets.map((asset) => asset.attributes)
  );
  const electricityAssignments = _.flatten(
    electricityAttributes.map((attr) => attr.assignments)
  );

  const { records: gasRecords, isLoading: isGasRecordsLoading } =
    useGetRecords(gasAssignments);
  const { records: steamRecords, isLoading: isSteamRecordsLoading } =
    useGetRecords(steamAssignments);
  const {
    records: electricityRecords,
    isLoading: isElectricityRecordsLoading,
  } = useGetRecords(electricityAssignments);

  const isLoading =
    isGasRecordsLoading || isSteamRecordsLoading || isElectricityRecordsLoading;

  if (isLoading) return null;

  const gas = parseFloat(getSumOfRecords(gasRecords));
  const steam = parseFloat(getSumOfRecords(steamRecords));
  const electricity = parseFloat(getSumOfRecords(electricityRecords));

  const series = [gas, steam, electricity];

  const labels = ["Gas", "Steam", "Electricity"];

  const options = { ...donutChartOptions, labels };

  return { series, options };
};

export default useGetConsumptionsByUtility;
