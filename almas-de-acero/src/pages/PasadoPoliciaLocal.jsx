import TimelineLayout from "../components/TimelineLayout";
import { policiaEvents } from "../constants/PasadoPolicias";
import FloatingCTA from "../components/FloatingCTA";

const PasadoPoliciaLocal = () => {
  return (
  <>
  <TimelineLayout title="Línea del Tiempo: Policía Local" events={policiaEvents} />
  <FloatingCTA path="/profesiones/policia-local" />
  </>
)
};

export default PasadoPoliciaLocal;