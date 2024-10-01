import { TrendType } from "../../entities/trendType";
import { Asset } from "../../entities/assets";
import useCreateAreaChartOptions from "./useCreateAreaChartOptions";
import useCreateLineChartOptions from "./useCreateLineChartOptions";

const useCreateTrendChartOptions = (assets: Asset[], trendType: TrendType) => {
  const areaChartOptions = useCreateAreaChartOptions(assets);
  const lineChartOptions = useCreateLineChartOptions(assets);

  // Return based on the chartType, but hooks are always called
  if (trendType === "area") {
    return areaChartOptions;
  } else if (trendType === "line") {
    return lineChartOptions;
  }
};

export default useCreateTrendChartOptions;
