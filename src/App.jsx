import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ConnectWallet } from "@thirdweb-dev/react";

import { Header, Footer } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

export default function App() {
  return (
    <div>
    {/* preloader */}
    {/* <Preloader /> */}
    {/* preloader end  */}
    {/* header start */}
    <Header />
    {/* header end */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/create-campaign" element={<CreateCampaign />} />
      <Route path="/campaign-details/:id" element={<CampaignDetails />} />
    </Routes>
    {/* footer start */}
    <Footer />
    {/* footer end */}
    </div>
  );
}
