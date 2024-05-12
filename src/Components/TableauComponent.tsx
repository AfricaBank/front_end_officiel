import { Table, Thead, Tr, Th, Tbody, Tfoot, Box } from "@chakra-ui/react";
const TableauComponent = () => {
  return (
    <>
      <Box>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th whiteSpace="nowrap">Prénom / Nom / Raison Sociale</Th>
              <Th whiteSpace="nowrap">Numero de dossier </Th>
              <Th whiteSpace="nowrap">Type de processus </Th>
              <Th whiteSpace="nowrap">Dernier Statut </Th>
              <Th whiteSpace="nowrap">Type de modification </Th>
              <Th whiteSpace="nowrap">Type de client </Th>
              <Th whiteSpace="nowrap">Catégorie clientèle</Th>
              <Th whiteSpace="nowrap">Date de création </Th>
              <Th whiteSpace="nowrap">Date de fin </Th>
              <Th whiteSpace="nowrap">Initiateur </Th>
              <Th whiteSpace="nowrap">Code exploitant </Th>
              <Th whiteSpace="nowrap">Actions </Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
    </>
  );
};
export default TableauComponent;
