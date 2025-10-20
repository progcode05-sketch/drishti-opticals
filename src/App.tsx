import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Eyeglasses from "./pages/Eyeglasses";
import Sunglasses from "./pages/Sunglasses";
import ContactLenses from "./pages/ContactLenses";
import Accessories from "./pages/Accessories";
import ProductDetail from "./pages/ProductDetail";
import Guide from "./pages/Guide";
import EyeTest from "./pages/EyeTest";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eyeglasses" element={<Eyeglasses />} />
          <Route path="/sunglasses" element={<Sunglasses />} />
          <Route path="/contact-lenses" element={<ContactLenses />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/eye-test" element={<EyeTest />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
