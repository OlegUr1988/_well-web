import { Heading, SimpleGrid } from "@chakra-ui/react";
import ConfigurationCard from "../components/ConfigurationCard";

const ConfigPanelPage = () => {
  const configCards = [
    { id: 1, name: "Assets", link: "/config/assets" },
    { id: 2, name: "Equipments", link: "/config/equipments" },
    { id: 3, name: "Queries", link: "/config/queries" },
  ];

  return (
    <>
      <Heading mb={5}>Configuration panel</Heading>

      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={5}>
        {configCards.map((card) => (
          <ConfigurationCard key={card.id} name={card.name} link={card.link} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ConfigPanelPage;
