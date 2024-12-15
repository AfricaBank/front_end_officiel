import {
    useSteps,
} from "@chakra-ui/react";


const steps = [
    {title: "Etat Civil", description: "Etat Civil"},
    {title: "Origine EER", description: "Origine EER"},
    {title: "Informations  personnelles ", description: "Info personnel"},
    {title: "Activités Professionnelles ", description: "Activités Pro"},
    {title: "Conformité & Relation bancaire", description: "Conformité RB"},
    {title: "Pièces justificatives", description: "Pièces justificatives"},
];

export const SingleStep = () => {
    const {} = useSteps({// Initial active step (starts from second step)
        count: steps.length,
    });

    return (
        <>
        </>
    );
};
