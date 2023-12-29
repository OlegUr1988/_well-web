import { Th, Thead, Tr } from "@chakra-ui/react";

const UnitsTableHead = () => {
  const columns = [
    { id: 0, label: "#", width: "" },
    { id: 1, label: "Name", width: "300" },
    { id: 4, label: "", width: "" },
    { id: 5, label: "", width: "" },
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

export default UnitsTableHead;
