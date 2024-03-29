import { Asset } from "../../entities/assets";
import useCalculateTotalKPIs from "../../hooks/useCalculateAreaTotalKPIs";

const PlantTotalCards = ({ plant }: { plant: Asset }) => {
  const totalKPIs = useCalculateTotalKPIs(plant);

  console.log(totalKPIs);

  return <div>PlantTotalCards</div>;
};

export default PlantTotalCards;
