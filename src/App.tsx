
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/about";
import ServicesPage from "./pages/services";
import EngineeringServices from "./pages/services/engineering";
import ProcurementServices from "./pages/services/procurement";
import ConstructionServices from "./pages/services/construction";
import ProjectsPage from "./pages/projects";
import QuoteRequestPage from "./pages/quote-request";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/engineering" element={<EngineeringServices />} />
          <Route path="/services/procurement" element={<ProcurementServices />} />
          <Route path="/services/construction" element={<ConstructionServices />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/quote-request" element={<QuoteRequestPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
