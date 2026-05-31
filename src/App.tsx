import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MyStory from "./pages/MyStory";
import AdminStudio from "./pages/AdminStudio";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const isGhPages =
    typeof window !== "undefined" &&
    window.location.pathname.startsWith("/neuro-spark-gallery/");
  const basename = isGhPages ? "/neuro-spark-gallery/" : undefined;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/my-story" element={<MyStory />} />
            <Route path="/admin" element={<AdminStudio />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
