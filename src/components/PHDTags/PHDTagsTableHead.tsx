import { Th, Thead, Tr } from "@chakra-ui/react";

const PHDTagsTableHead = () => {
  const columns = [
    { id: 0, label: "#", width: "" },
    { id: 1, label: "Tagname", width: "300" },
    { id: 1, label: "Descrtiption", width: "300" },
    { id: 2, label: "Created", width: "" },
    { id: 3, label: "Last Modified", width: "" },
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

export default PHDTagsTableHead;
