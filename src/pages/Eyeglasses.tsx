import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import product1 from "@/assets/product-glasses-1.jpg";
import product2 from "@/assets/product-glasses-2.jpg";

const Eyeglasses = () => {
  const [priceRange, setPriceRange] = useState([500, 5000]);

  const products = [
    { id: "1", name: "Classic Metal Frame", price: 1999, image: product1, category: "Men" },
    { id: "2", name: "Modern Round Frame", price: 1799, image: product2, category: "Women" },
    { id: "3", name: "Premium Rectangle", price: 2299, image: product1, category: "Unisex" },
    { id: "4", name: "Designer Square", price: 2799, image: product2, category: "Women" },
    { id: "5", name: "Lightweight Aviator", price: 2199, image: product1, category: "Men" },
    { id: "6", name: "Vintage Cat-Eye", price: 2499, image: product2, category: "Women" },
    { id: "7", name: "Sport Rectangle", price: 1899, image: product1, category: "Unisex" },
    { id: "8", name: "Classic Wayfarer", price: 2099, image: product2, category: "Unisex" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-4xl font-bold">Eyeglasses</h1>
            <p className="mt-2 text-muted-foreground">Discover your perfect vision companion</p>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className="hidden w-64 shrink-0 lg:block">
              <div className="sticky top-20 space-y-6">
                <div>
                  <h3 className="mb-4 font-semibold">Sort By</h3>
                  <Select defaultValue="popularity">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popularity">Popularity</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Gender</h3>
                  <div className="space-y-2">
                    {["Men", "Women", "Unisex", "Kids"].map((gender) => (
                      <div key={gender} className="flex items-center space-x-2">
                        <Checkbox id={gender} />
                        <Label htmlFor={gender} className="text-sm font-normal cursor-pointer">
                          {gender}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Frame Shape</h3>
                  <div className="space-y-2">
                    {["Rectangle", "Round", "Square", "Aviator", "Cat-Eye"].map((shape) => (
                      <div key={shape} className="flex items-center space-x-2">
                        <Checkbox id={shape} />
                        <Label htmlFor={shape} className="text-sm font-normal cursor-pointer">
                          {shape}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Frame Size</h3>
                  <div className="space-y-2">
                    {["Small", "Medium", "Large"].map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <Checkbox id={size} />
                        <Label htmlFor={size} className="text-sm font-normal cursor-pointer">
                          {size}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Price Range</h3>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    min={500}
                    max={5000}
                    step={100}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Frame Material</h3>
                  <div className="space-y-2">
                    {["Metal", "Acetate", "TR-90"].map((material) => (
                      <div key={material} className="flex items-center space-x-2">
                        <Checkbox id={material} />
                        <Label htmlFor={material} className="text-sm font-normal cursor-pointer">
                          {material}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{products.length} products found</p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Eyeglasses;
