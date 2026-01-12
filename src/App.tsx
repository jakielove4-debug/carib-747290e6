import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Accessories from "./pages/Accessories";
import BowRetrievers from "./pages/BowRetrievers";
import Savur from "./pages/Savur";
import Cases from "./pages/Cases";
import GaffHooks from "./pages/GaffHooks";
import ArrowLockers from "./pages/ArrowLockers";
import ReelsAccessories from "./pages/ReelsAccessories";
import CommercialGrade from "./pages/CommercialGrade";
import GenericAccessoryPage from "./pages/GenericAccessoryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/bow-retrievers" element={<BowRetrievers />} />
          <Route path="/accessories/bow-retrievers/savur" element={<Savur />} />
          <Route path="/accessories/cases" element={<Cases />} />
          <Route path="/accessories/gaff-hooks" element={<GaffHooks />} />
          <Route path="/accessories/arrow-lockers" element={<ArrowLockers />} />
          <Route path="/accessories/:category" element={<GenericAccessoryPage />} />
          <Route path="/reels-accessories" element={<ReelsAccessories />} />
          <Route path="/commercial-grade" element={<CommercialGrade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
