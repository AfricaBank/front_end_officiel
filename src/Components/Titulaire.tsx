import React, { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {Box, Button, Flex, Input, Radio, RadioGroup, Select, Stack, Text, Textarea} from '@chakra-ui/react';
import axios from 'axios';

const Titulaire: React.FC = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [formData, setFormData] = useState<any>({});

    const handleNext = () => {
        // Vous pouvez ajouter ici des validations ou des logiques spécifiques à chaque onglet
        setCurrentTab((prevTab) => prevTab + 1);
    };
    const handlePrevious = () => {
        setCurrentTab((prevTab) => prevTab - 1);
    };

    const handleSave = () => {
        axios.post('localhost:8585/api/titulaire', formData) // Assurez-vous de remplacer 'URL_DE_VOTRE_API' par votre URL d'API
            .then(response => {
                console.log('Données enregistrées avec succès:', response.data);
            })
            .catch(error => {
                console.error('Erreur lors de l\'enregistrement des données:', error);
            });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Box>
            <Tabs selectedIndex={currentTab} onSelect={(index) => setCurrentTab(index)}>
                <TabList>
                    <Tab>Vigilance</Tab>
                    <Tab>Identification</Tab>
                    <Tab>Origine</Tab>
                    <Tab>Naissance</Tab>
                    <Tab>Situation Familiale</Tab>
                    {/* Ajoutez ici d'autres onglets selon vos besoins */}
                </TabList>


                <TabPanel>
                    <Stack spacing={4} p={4}>
                        <Flex justify="space-around">
                            <Box w='300px'>
                            <Text>Date de vigilance:</Text>
                            </Box>
                            <Box w='300px'>
                            <Text>Présence dans la liste:</Text>
                            </Box>
                            <Box w='300px'>
                            <Text>Type de PPE:</Text>
                            </Box>
                        </Flex>
                        <Flex justify="space-around">

                            <Input type='date' w='300px' size='sm' onChange={handleChange}/>

                            <Select w='300px' size='sm'>
                                <option value='detecte'>DÉTÉCTÉ</option>
                                <option value='non-detecte'>NON DÉTÉCTÉ</option>
                            </Select>


                            <Select w='300px' size='sm'>
                                <option value='non-ppe'>NON PPE</option>
                                <option value='ppe'>PPE</option>
                                <option value='ppe-haut-risque'>PPE Haut Risque</option>
                            </Select>
                        </Flex>


                            <Flex justify="space-around">
                                <Box w='300px'>
                                    <Text>PPE Local:</Text>
                                </Box>
                                <Box w='300px'>
                                    <Text>Date d'identification:</Text>
                                </Box>
                                <Box w='300px'>
                                    <Text>Sanction:</Text>
                                </Box>
                            </Flex>

                            <Flex justify="space-around">
                                <RadioGroup w='300px' defaultValue='non'>
                                    <Stack direction='row'>
                                        <Radio value='oui'>Oui</Radio>
                                        <Radio value='non'>Non</Radio>
                                    </Stack>
                                </RadioGroup>


                                <Input type='date' size='sm' w='300px'/>


                                <RadioGroup w='300px' defaultValue='non'>
                                    <Stack direction='row'>
                                        <Radio value='oui'>Oui</Radio>
                                        <Radio value='non'>Non</Radio>
                                    </Stack>
                                </RadioGroup>
                            </Flex>

                        <Flex justify="space-around">
                            <Box w='300px'>
                                <Text>Date d'identification CIP:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Détection CIP:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Commentaire:</Text>
                            </Box>
                        </Flex>

                        <Flex justify="space-around">
                            <Input w='300px' type='date' size='sm' />
                            <Select w='300px' size='sm'>
                                <option value='detecte'>Detecté</option>
                                <option value='non-detecte'>Non Detecté</option>
                            </Select>
                            <Textarea w='300px' size='sm' />
                        </Flex>


                        <Button colorScheme="teal" w='100px' onClick={handleNext}>
                            Suivant
                        </Button>
                    </Stack>
                </TabPanel>

                <TabPanel>
                    <Stack spacing={4} p={4}>
                        {/* Champs pour l'onglet Identification */}
                        {/* Ajoutez ici les champs pour l'identification */}

                        <Flex justify="space-around">
                            <Box w='300px'>
                                <Text>Date de vigilance:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Présence dans la liste:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Type de PPE:</Text>
                            </Box>
                        </Flex>
                        <Flex justify="space-around">

                            <Input type='date' w='300px' size='sm' onChange={handleChange}/>

                            <Select w='300px' size='sm'>
                                <option value='detecte'>DÉTÉCTÉ</option>
                                <option value='non-detecte'>NON DÉTÉCTÉ</option>
                            </Select>


                            <Select w='300px' size='sm'>
                                <option value='non-ppe'>NON PPE</option>
                                <option value='ppe'>PPE</option>
                                <option value='ppe-haut-risque'>PPE Haut Risque</option>
                            </Select>
                        </Flex>


                        <Flex justify="space-around">
                            <Box w='300px'>
                                <Text>PPE Local:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Date d'identification:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Sanction:</Text>
                            </Box>
                        </Flex>

                        <Flex justify="space-around">
                            <RadioGroup w='300px' defaultValue='non'>
                                <Stack direction='row'>
                                    <Radio value='oui'>Oui</Radio>
                                    <Radio value='non'>Non</Radio>
                                </Stack>
                            </RadioGroup>


                            <Input type='date' size='sm' w='300px'/>


                            <RadioGroup w='300px' defaultValue='non'>
                                <Stack direction='row'>
                                    <Radio value='oui'>Oui</Radio>
                                    <Radio value='non'>Non</Radio>
                                </Stack>
                            </RadioGroup>
                        </Flex>

                        <Flex justify="space-around">
                            <Box w='300px'>
                                <Text>Date d'identification CIP:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Détection CIP:</Text>
                            </Box>
                            <Box w='300px'>
                                <Text>Commentaire:</Text>
                            </Box>
                        </Flex>

                        <Flex justify="space-around">
                            <Input w='300px' type='date' size='sm' />
                            <Select w='300px' size='sm'>
                                <option value='detecte'>Detecté</option>
                                <option value='non-detecte'>Non Detecté</option>
                            </Select>
                            <Textarea w='300px' size='sm' />
                        </Flex>
                        <Flex justify="space-around">
                            <Button colorScheme="blue" onClick={handlePrevious} disabled={currentTab === 0}>
                                Précédent
                            </Button>
                            <Button colorScheme="teal" onClick={handleNext} >
                                Suivant
                            </Button>
                        </Flex>

                        <Button colorScheme="orange" onClick={handleSave}>Enregistrer</Button>
                    </Stack>
                </TabPanel>


                {/* Ajoutez ici d'autres panneaux pour les onglets supplémentaires */}

            </Tabs>
        </Box>
    );
};

export default Titulaire;
