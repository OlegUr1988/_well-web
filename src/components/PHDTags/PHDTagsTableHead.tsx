import { Th, Thead, Tr } from "@chakra-ui/react";

const PHDTagsTableHead = () => {
  const columns = [
    { id: 0, label: "#", width: "" },
    { id: 1, label: "Tagname", width: "300" },
    { id: 2, label: "Units", width: "300" },
    { id: 3, label: "", width: "" },
    { id: 4, label: "", width: "" },
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

export default PHDTagsTableHead;
