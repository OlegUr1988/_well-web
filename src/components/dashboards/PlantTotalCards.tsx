import { Asset } from "../../entities/assets";
import useCalculateAreaTotalKPIs from "../../hooks/useCalculateAreaTotalKPIs";

const PlantTotalCards = ({ plant }: { plant: Asset }) => {
  const totalKPIs = useCalculateAreaTotalKPIs(plant);

  console.log(totalKPIs);

  return <div>PlantTotalCards</div>;
};

export default PlantTotalCards;
