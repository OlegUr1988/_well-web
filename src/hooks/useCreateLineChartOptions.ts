import lineChartOptions from "../constants/lineChartOptions";
import { Equipment } from "../entities/equipments";
import useGetSeriesByEquipments from "./useGetSeriesByEquipments";

const useCreateLineChartOptions = (equipments: Equipment[]) => {
  const series = useGetSeriesByEquipments(equipments);
  const options = {
    ...lineChartOptions,
    title: { ...lineChartOptions.title, text: "Daily Average" },
  };

  return { series, options };
};

export default useCreateLineChartOptions;
