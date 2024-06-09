import {
  Box,
  Flex,
  Text,
  Switch,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useRef } from "react";
import { colors } from "../../customTheme/colorTheme";

export const NombreDossierParStatut = () => {
  const ref = useRef();
  const data = {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [
      {
        label: "En cours ",
        data: [12, 19, 3, 5, 2, 3, 9],
        backgroundColor: colors.secondary.green[300],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 0,
        barThickness: 10,
        borderRadius: 15,
      },
      {
        label: "Rejetés",
        data: [7, 11, 5, 8, 3, 7, 6],
        backgroundColor: colors.state.red[100],
        fill: false,
        borderColor: "#742774",
        barThickness: 10,
        borderRadius: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          beginAtZero: true,
          stepSize: 7,
        },
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <>
      <Box
        w="650px"
        boxShadow="5px 5px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="lg"
      >
        <Flex m="20px" p="10px">
          <FormControl display="flex" alignItems="center">
            <Text> Dossiers </Text>
            <FormLabel htmlFor="email-alerts" mb="0" w="200px" ml="100px">
              En cours
            </FormLabel>
            <Switch id="email-alerts" mr="10px" />
            <FormLabel htmlFor="email-alerts" mb="0">
              Rejetés
            </FormLabel>
            <Switch id="email-alerts" mr="15px" />
            <Select placeholder="Journalier" size="lg" />
          </FormControl>
        </Flex>
        <Box>
          <Bar ref={ref} data={data} options={options} />
        </Box>
      </Box>
    </>
  );
};
