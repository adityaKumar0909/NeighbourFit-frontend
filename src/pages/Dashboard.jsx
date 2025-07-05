import React, { useEffect } from 'react';
import DashboardCTA from "../components/dashboardCTA.jsx";
import DashboardSelectLocation from "../components/dashboardSelectLocation.jsx";
import Testimonials from "../components/testimonials.jsx";
import Steps from "../components/steps.jsx";
import { motion } from 'framer-motion';
import CCarousel from "../components/carousel.jsx";

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
      <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.2 }}
      >
      <div>
          <Steps/>
          <DashboardSelectLocation/>
          <Testimonials/>
      </div>
      </motion.div>
  )
};

export default Dashboard;
