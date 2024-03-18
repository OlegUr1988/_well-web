import { Attribute } from "../../../entities/attributes";
import useGetAttributeTypes from "../../../hooks/useGetAttributeTypes";
import SubassetAttributeTypeItem from "./SubassetAttributeTypeItem";

const SubassetAttributeTypesList = ({
  attributes,
}: {
  attributes: Attribute[];
}) => {
  const attrTypes = useGetAttributeTypes();
  const hasDutyType = !!attrTypes["duty"];
  const hasOperatingLossType = !!attrTypes["operating loss"];
  const hasDesignLossType = !!attrTypes["design loss"];

  return (
    <>
      {hasDutyType && (
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
