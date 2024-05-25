import { Doughnut } from 'react-chartjs-2';
import { Box, Flex, Text, Center, Card } from '@chakra-ui/react';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { barChartData } from "./data/FAKE_DATA.tsx";
import KpiTache from './kpitache.tsx';

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
);

function Kpi({ title, count, percentageChange, data, bgColor, totalLabel }) {
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
                        <Box textAlign="center">
                            <Text fontSize="xl" fontWeight="bold">{count}</Text>
                        </Box>
                    </Center>
                </Box>
                <Box ml={4}>
                    <Text fontSize="2xl" fontWeight="bold">{count}</Text>
                    <Flex alignItems="center" mt={2}>
                        <Box bg={bgColor} w={4} h={4} mr={2}></Box>
                        <Text>{title} <Text as="span" color={bgColor}>{percentageChange}</Text></Text>
                    </Flex>
                    <Flex alignItems="center" mt={2}>
                        <Box bg="blue.400" w={4} h={4} mr={2}></Box>
                        <Text>{totalLabel}</Text>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
}

function Dashboard() {
    return (
        <Box p={4} boxShadow="md" bg="white" borderRadius="md" m="20">
            <Text fontSize="xl" fontWeight="bold" mb={4}>Récapitulatif des dossiers</Text>
            <Flex justifyContent="space-between" wrap="wrap">
                <Kpi
                    title="Dossiers complets"
                    count="2574"
                    percentageChange="+50%"
                    data={barChartData}
                    bgColor="green.400"
                    totalLabel="Total Dossiers"
                />
                <Kpi
                    title="Dossiers en cours"
                    count="1570"
                    percentageChange="+50%"
                    data={barChartData}
                    bgColor="cyan.400"
                    totalLabel="Nouveau dossier"
                />
                <Kpi
                    title="Tâches actives"
                    count="100"
                    percentageChange="+50%"
                    data={barChartData}
                    bgColor="red.400"
                    totalLabel="Tâches abandonnées"
                />
                <KpiTache
                    title="Dossiers complets"
                    count="2574"
                    percentageChange="+50%"
                    data={barChartData}
                    bgColor="green.400"
                    totalLabel="Total Dossiers"
                />
        
            </Flex>
        </Box>
    );
}

export default Dashboard;


