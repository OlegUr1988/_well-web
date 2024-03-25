import _ from "lodash";
import { Asset } from "../../entities/assets";
import { AttributeType } from "../../entities/attributeType";
import useAreaAttributesByType from "../../hooks/useAreaAttributesByType";
import useAreaLosses from "../../hooks/useAreaLosses";

const AreaTotalLossesColumnChart = ({
  assets,
}: {
  assets: Asset[];
  types: AttributeType[];
}) => {
  const assetDesignLosses = useAreaLosses(
    useAreaAttributesByType(assets, "design loss")
  );
  const assetOperatingLosses = useAreaLosses(
    useAreaAttributesByType(assets, "operating loss")
  );

  if (!assetDesignLosses) return null;

  if (!assetOperatingLosses) return null;

  const dataset = assets?.map((asset: Asset) => ({
    id: asset.id,
    name: asset.name,
    losses: {
      designLoss:
        _.sum(asset.children.map((child) => assetDesignLosses![child.id])) || 0,
      operatingLoss:
        _.sum(asset.children.map((child) => assetOperatingLosses![child.id])) ||
        0,
    },
  }));

  console.log(dataset);

  return <div>AreaTotalLossesColumnChart</div>;
};

export default AreaTotalLossesColumnChart;
