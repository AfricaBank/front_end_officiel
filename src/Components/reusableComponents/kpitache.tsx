import { Doughnut } from 'react-chartjs-2';
import { Box, Flex, Text, Center, Card, Button, Checkbox } from '@chakra-ui/react';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { barChartData } from "./data/FAKE_DATA.tsx";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
);

function KpiTache({ title, count, percentageChange, data, bgColor, totalLabel }) {
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
                    <Flex alignItems="center" mt={2}>
                       <Checkbox as="span"></Checkbox>
                    </Flex>
                    <Flex alignItems="center" mt={2}>
                       <Checkbox as="span"></Checkbox>
                    </Flex>
                </Box>
            </Flex>
        </Card>
    );
}

export default KpiTache

