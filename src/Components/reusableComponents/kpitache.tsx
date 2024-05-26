import { Doughnut } from 'react-chartjs-2';
import { Box, Flex, Text, Center, Card, Button, Checkbox, Switch } from '@chakra-ui/react';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
);


function KpiTache({ data }) {
    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        cutout: '70%',
    };

    return (
        <Card width="22%" p={4} boxShadow="md">
            <Flex alignItems="center">
                <Box width="40%" position="relative">
                    <Doughnut options={options} data={data} />
                    <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                    </Center>
                </Box>
                <Box ml={4}>
                    <Flex direction="column" alignItems="flex-start">
                        <Flex alignItems="center" mb={2}>
                            <Switch colorScheme="blue" mr={2} />
                            <Text>Dossiers</Text>
                        </Flex>
                        <Flex alignItems="center" mb={2}>
                            <Switch colorScheme="orange" mr={2} />
                            <Text>Taches</Text>
                        </Flex>
                        <Flex alignItems="center">
                            <Switch colorScheme="teal" mr={2} />
                            <Text>Nouveau dossier</Text>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
}

export default KpiTache