import { Doughnut } from 'react-chartjs-2';
import { Box, Flex, Text, Center, Card, Spacer } from '@chakra-ui/react';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { barChartData } from "./data/FAKE_DATA.tsx";

ChartJS.register(
    Tooltip,
    Legend,
    ArcElement,
)

function Kpi() {
    const options = {};

    return (
        <Card  width="100%" top='50px'>
            <Box width="60%" p={2}>
                <Flex justifyContent="">
                    {/* <Box
                        width={{base: "100%", md: "30%"}}
                        textAlign="left"
                        mx={{base: 2, md: 0}}
                    >
                        <Doughnut options={options} data={barChartData}/>
                        <Text fontSize="2xl" mt={2}>100</Text>
                        <Text>100</Text>
                    </Box>
                    <Box
                        width={{base: "100%", md: "30%"}}
                        textAlign="left"
                        mx={{base: 2, md: 0}}
                    >
                        <Doughnut options={options} data={barChartData}/>
                        <Text fontSize="2xl" mt={2}>100</Text>
                        <Text>1570</Text>
                    </Box> */}
             
                    <Card width="50%"  >
                    <Box 
                        width={{base: "100%", md: "40%"}}
                        textAlign="left"
                        mx={{base: 2, md: 0}}
                        >

                        <Doughnut options={options} data={barChartData}/>
                        <Text fontSize="xl" mt={2} align="right">100</Text>
                        <Text align="right">2574</Text>
                        
                     </Box>
</Card>
                </Flex>
            </Box>
          
        </Card>
    );
}

export default Kpi;
