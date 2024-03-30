import { Grid, GridItem } from "@chakra-ui/react";
import logo1 from "../assets/logo/logo1.png";
import icondashboard from "../assets/icons/vector1.png";
import tachesactives from "../assets/icons/vector5.png";
import agent from "../assets/icons/vector4.png";
import role from "../assets/icons/vector3.png";
import groupe from "../assets/icons/vector2.png";
import dossier from "../assets/icons/vector6.png";

const Sidebar = () => {
    return (
        <Grid
            templateAreas={`
                "logo"
                "dashboard"
                "groupes"
                "roles"
                "agents"
                "taches"
                "dossiers"
            `}
            gridTemplateRows="auto repeat(6, 30px)"
            gap={6}
            color="black" // Texte blanc
            alignItems="center"
            fontWeight="bold"
            p={10}
        >
            <GridItem area="logo">
                <img src={logo1} alt="Logo" width={170} height={40} />
            </GridItem>
            <GridItem area="dashboard" display="flex" alignItems="center">
                <img src={icondashboard} alt="Dashboard" style={{ marginRight: "10px" }} />
                Dashboard
            </GridItem>
            <GridItem area="groupes" display="flex" alignItems="center">
                <img src={groupe} alt="Gestion des groupes" style={{ marginRight: "10px" }} />
                Gestion des groupes
            </GridItem>
            <GridItem area="roles" display="flex" alignItems="center">
                <img src={role} alt="Gestion des rôles" style={{ marginRight: "10px" }} />
                Gestion des rôles
            </GridItem>
            <GridItem area="agents" display="flex" alignItems="center">
                <img src={agent} alt="Gestion des agents" style={{ marginRight: "10px" }} />
                Gestion des agents
            </GridItem>
            <GridItem area="taches" display="flex" alignItems="center">
                <img src={tachesactives} alt="Taches actives" style={{ marginRight: "10px" }} />
                Taches actives
            </GridItem>
            <GridItem area="dossiers" display="flex" alignItems="center">
                <img src={dossier} alt="Gestion des dossiers" style={{ marginRight: "10px" }} />
                Gestion des dossiers
            </GridItem>
        </Grid>
    );
};

export default Sidebar;
