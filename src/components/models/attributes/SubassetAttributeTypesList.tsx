import { Attribute } from "../../../entities/attributes";
import { useAsset } from "../../../hooks/assets";
import useGetAttributeTypes from "../../../hooks/useGetAttributeTypes";
import useModelStore from "../../../store/model";
import SubassetAttributeTypeItem from "./SubassetAttributeTypeItem";

const SubassetAttributeTypesList = ({
  attributes,
}: {
  attributes: Attribute[];
}) => {
  const { subassetId } = useModelStore((s) => s.modelQuery);
  const { data: asset } = useAsset(subassetId);
  const attrTypes = useGetAttributeTypes();

  const showCO2Emission = () => asset?.utilityType.name.toLowerCase() === "gas";
  const showDuty = () => asset?.utilityType.name.toLowerCase() !== "heat";

  return (
    <>
      {showCO2Emission() && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes["co2 emission"].id}
          label="CO2 Emission"
          showCreateButton={false}
        />
      )}
      {showDuty() && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes["duty"].id}
          label="Duty"
          showCreateButton={false}
        />
      )}
      <SubassetAttributeTypeItem
        attributes={attributes}
        attributeTypeId={attrTypes["design loss"].id}
        label="Design Loss"
      />
      <SubassetAttributeTypeItem
        attributes={attributes}
        attributeTypeId={attrTypes["operating loss"].id}
        label="Operating loss"
      />
    </>
  );
};

export default SubassetAttributeTypesList;
