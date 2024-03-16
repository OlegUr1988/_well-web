import { Attribute } from "../../../entities/attributes";
import useGetAttributeTypes from "../../../hooks/useGetAttributeTypes";
import SubassetAttributeTypeItem from "./SubassetAttributeTypeItem";

const SubassetAttributeTypesList = ({
  attributes,
}: {
  attributes: Attribute[];
}) => {
  const attrTypes = useGetAttributeTypes();

  return (
    <>
      <SubassetAttributeTypeItem
        attributes={attributes}
        attributeTypeId={attrTypes["co2 emission"].id}
        label="CO2 Emission"
        showCreateButton={false}
      />
      <SubassetAttributeTypeItem
        attributes={attributes}
        attributeTypeId={attrTypes["duty"].id}
        label="Duty"
        showCreateButton={false}
      />
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
