import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// Customisation du style de bouton sans couleur de fond mais avec bordure 
const outline = defineStyle({});

// Customisation du style de bouton avec couleur de fond 
const solid = defineStyle({});

// Customisation du style de bouton sans bordure ni couleur de fond 
const ghost = defineStyle({});

// Customisation des boutons de types lien hypertext 
const link = defineStyle({});

//Customisation du style pour les boutons à petité taille 
const smol = defineStyle({
    fontSize: '14px',
    px: '24px',
    py:'14px',
    h: '36px',
    borderRadius: '7px',     
});

//Customisation du style pour les boutons à taille moyenne 
const medium = defineStyle({
    fontSize: '14px',
        px: '24px',
        py:'14px',
        h: '45px',
        borderRadius: '7px',
});

//Customisation du style pour les boutons à plus grande taille 
const large = defineStyle({
    fontSize: '14px',
    px: '24px',
    py:'14px',
    h: '54px',
    borderRadius: '7px',
});

export const buttonTheme = defineStyleConfig({
    variants: { outline, solid, ghost, link },
    sizes:{ smol, medium, large },
    
  });