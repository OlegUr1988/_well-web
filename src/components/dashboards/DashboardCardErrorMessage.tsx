import { DashboardCard } from "./common/";
import MessageComponent from "./MessageComponent";

const DashboardCardErrorMessage = () => {
  return (
    <DashboardCard>
      <MessageComponent height={400} message="The Data is not available" />
    </DashboardCard>
  );
};

export default DashboardCardErrorMessage;
