import { Th, Thead, Tr } from "@chakra-ui/react";

const EquipmentsTableHead = () => {
  const columns = [
    { id: 0, label: "#", width: "" },
    { id: 1, label: "Equipment", width: "300" },
    { id: 2, label: "Asset", width: "300" },
    { id: 3, label: "Created", width: "" },
    { id: 4, label: "Last Modified", width: "" },
    { id: 5, label: "", width: "" },
    { id: 6, label: "", width: "" },
  ];

  return (
    <Thead>
      <Tr height={12}>
        {columns.map((column) => (
          <Th key={column.id} w={column.width} textAlign="center">
            {column.label}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default EquipmentsTableHead;
