import { CustomCardDashboardStat } from "../Components/reusableComponents/CustomCardDashboardStat";
import { NombreDossierParStatut } from "../Components/reusableComponents/NombreDossierParStatut";
export const Dashboard = () => {
  return (
    <>
      <CustomCardDashboardStat />
      <NombreDossierParStatut />
    </>
  );
};
