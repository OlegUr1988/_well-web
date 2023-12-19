import { useEquipments } from "../../hooks/equipments";
import useEquipmentStore from "../../store/equipments";
import Pagination from "../Pagination";

const EquipmentsPagination = () => {
  const { page, pageSize, searchedName } = useEquipmentStore(
    (s) => s.equipmentQuery
  );
  const setPage = useEquipmentStore((s) => s.setPage);

  const { data: equipments, error } = useEquipments({
    page,
    pageSize,
    searchedName,
  });

  if (error) return null;

  return (
    <>
      {equipments?.count! > pageSize! && (
        <Pagination
          page={page!}
          count={equipments?.count!}
          pageSize={pageSize!}
          onFirstPagePress={() => setPage(1)}
          onPreviousPagePress={() => setPage(page! - 1)}
          onNextPagePress={() => setPage(page! + 1)}
          onLastPagePress={() =>
            setPage(Math.ceil(equipments?.count! / pageSize!))
          }
        />
      )}
    </>
  );
};

export default EquipmentsPagination;
