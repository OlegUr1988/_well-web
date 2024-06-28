import areaChartOptions from "../../constants/lossesAreaChartOptions";
import { Asset } from "../../entities/assets";
import useGetSeriesByAsset from "./useGetSeriesByAsset";

const useCreateAreaChartOptions = (assets: Asset[]) => {
  const series = useGetSeriesByAsset(assets);
  const options = {
    ...areaChartOptions,
    title: { ...areaChartOptions.title, text: "Daily Average" },
  };

  return { series, options };
};

export default useCreateAreaChartOptions;
