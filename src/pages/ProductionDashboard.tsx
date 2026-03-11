import React from 'react';
import { DashboardProvider } from '../context/DashboardContext';
import RightHoverSidebar from '../components/dashboard/RightHoverSidebar';
import GeneralPage from '../components/dashboard/GeneralPage';

const ProductionDashboard: React.FC = () => {
  return (
    <DashboardProvider>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <GeneralPage />
        <RightHoverSidebar />
      </div>
    </DashboardProvider>
  );
};

export default ProductionDashboard;