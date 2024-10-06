import { CustomCardDashboardStat } from "../Components/reusableComponents/CustomCardDashboardStat";
import { NombreDossierParStatut } from "../Components/reusableComponents/NombreDossierParStatut";
import { StepperComponent } from "../Components/reusableComponents/StepperComponent";
export const Dashboard = () => {
  return (
    <>
      <CustomCardDashboardStat />
      <NombreDossierParStatut />
      <StepperComponent />
    </>
  );
};
