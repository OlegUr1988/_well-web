import lineChartOptions from "../constants/lineChartOptions";
import { Asset } from "../entities/assets";
import useGetSeriesByAsset from "./useGetSeriesByAsset";

const useCreateLineChartOptions = (assets: Asset[]) => {
  const series = useGetSeriesByAsset(assets);
  const options = {
    ...lineChartOptions,
    title: { ...lineChartOptions.title, text: "Daily Average" },
  };

  return { series, options };
};

export default useCreateLineChartOptions;
