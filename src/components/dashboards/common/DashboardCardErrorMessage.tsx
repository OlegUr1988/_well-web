import MessageComponent from "./MessageComponent";
import DashboardCard from "./DashboardCard";

const DashboardCardErrorMessage = () => {
  return (
    <DashboardCard>
      <MessageComponent height={400} message="The Data is not available" />
    </DashboardCard>
  );
};

export default DashboardCardErrorMessage;
