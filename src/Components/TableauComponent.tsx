import { Table, Thead, Tr, Th, Tbody, Tfoot, Box } from "@chakra-ui/react";
const TableauComponent = () => {
  return (
    <>
      <Box overflow-x="auto">
        <Table size="sm">
          <Thead>
            <Tr>
        
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
