import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import RoleSelection from './pages/RoleSelection';
import DoctorRegister from './pages/DoctorRegister';
import ClinicRegister from './pages/ClinicRegister';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RoleSelection />} />
        <Route path="/register/doctor" element={<DoctorRegister />} />
        <Route path="/register/clinic" element={<ClinicRegister />} />
        <Route path="/verification" element={<SuccessPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
