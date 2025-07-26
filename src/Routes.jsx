import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import ResourceKnowledgeBase from "pages/resource-knowledge-base";
import AboutFounderStory from "pages/about-founder-story";
import InteractivePortfolioGallery from "pages/interactive-portfolio-gallery";
import ContactConsultationHub from "pages/contact-consultation-hub";
import AdminDashboard from "pages/admin-dashboard";
import Login from "pages/auth/Login";
import Signup from "pages/auth/Signup";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/resource-knowledge-base" element={<ResourceKnowledgeBase />} />
        <Route path="/about-founder-story" element={<AboutFounderStory />} />
        <Route path="/interactive-portfolio-gallery" element={<InteractivePortfolioGallery />} />
        <Route path="/contact-consultation-hub" element={<ContactConsultationHub />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;