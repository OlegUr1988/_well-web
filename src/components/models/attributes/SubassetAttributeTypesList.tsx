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
  const isGasUtility = asset?.utilityType.name.toLowerCase() === "gas";
  const isNotHeatUtility = asset?.utilityType.name.toLowerCase() !== "heat";
  const hasCO2EmissionType = !!attrTypes["co2 emission"];
  const hasDutyType = !!attrTypes["duty"];
  const hasOperatingLossType = !!attrTypes["operating loss"];
  const hasDesignLossType = !!attrTypes["design loss"];

  return (
    <>
      {isGasUtility && hasCO2EmissionType && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes["co2 emission"].id}
          label="CO2 Emission"
          showCreateButton={false}
        />
      )}
      {isNotHeatUtility && hasDutyType && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes["duty"].id}
          label="Duty"
          showCreateButton={false}
        />
      )}
      {hasDesignLossType && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes["design loss"].id}
          label="Design Loss"
        />
      )}
      {hasOperatingLossType && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes["operating loss"].id}
          label="Operating loss"
        />
      )}
    </>
  );
};

export default SubassetAttributeTypesList;
