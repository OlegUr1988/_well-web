import { Attribute } from "../../../entities/attributes";
import useGetAttributeTypes from "../../../hooks/useGetAttributeTypes";
import SubassetAttributeTypeItem from "./SubassetAttributeTypeItem";

const SubassetAttributeTypesList = ({
  attributes,
}: {
  attributes: Attribute[];
}) => {
  const manageableLoss = "manageable loss";
  const unManageableLoss = "non-controllable loss";

  const attrTypes = useGetAttributeTypes();
  const hasDutyType = !!attrTypes["duty"];
  const hasManageableLossType = !!attrTypes[manageableLoss];
  const hasUnmanageableLossType = !!attrTypes[unManageableLoss];

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
      {hasUnmanageableLossType && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes[unManageableLoss].id}
          label="Non-controllable Loss"
        />
      )}
      {hasManageableLossType && (
        <SubassetAttributeTypeItem
          attributes={attributes}
          attributeTypeId={attrTypes[manageableLoss].id}
          label="Manageable Loss"
        />
      )}
    </>
  );
};

export default SubassetAttributeTypesList;
