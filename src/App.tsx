
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NovaReuniao from "./pages/NovaReuniao";
import UploadReuniao from "./pages/UploadReuniao";
import NotFound from "./pages/NotFound";
import AgendarReuniao from "./pages/AgendarReuniao";
import Historico from "./pages/Historico";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider delayDuration={0}>
        <div className="min-h-screen flex w-full">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nova-reuniao" element={<NovaReuniao />} />
              <Route path="/upload-reuniao" element={<UploadReuniao />} />
              <Route path="/agendar-reuniao" element={<AgendarReuniao />} />
              <Route path="/historico" element={<Historico />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
