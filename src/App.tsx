import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./components/AppSidebar";
import Index from "./pages/Index";
import NovaReuniao from "./pages/NovaReuniao";
import UploadReuniao from "./pages/UploadReuniao";
import NotFound from "./pages/NotFound";
import AgendarReuniao from "./pages/AgendarReuniao";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <SidebarInset>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/nova-reuniao" element={<NovaReuniao />} />
                <Route path="/upload-reuniao" element={<UploadReuniao />} />
                <Route path="/agendar-reuniao" element={<AgendarReuniao />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
