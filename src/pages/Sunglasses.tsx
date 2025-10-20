import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import product2 from "@/assets/product-sunglasses-1.jpg";

const Sunglasses = () => {
  const products = [
    { id: "s1", name: "Classic Aviator", price: 2499, image: product2, category: "Unisex" },
    { id: "s2", name: "Wayfarer Style", price: 2299, image: product2, category: "Unisex" },
    { id: "s3", name: "Cat-Eye Designer", price: 2799, image: product2, category: "Women" },
    { id: "s4", name: "Sport Wrap", price: 2199, image: product2, category: "Men" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-4xl font-bold">Sunglasses</h1>
            <p className="mt-2 text-muted-foreground">Protect your eyes in style</p>
          </div>
        </div>

        <div className="container py-8">
          <div className="flex gap-8">
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
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold">Gender</h3>
                  <div className="space-y-2">
                    {["Men", "Women", "Unisex"].map((gender) => (
                      <div key={gender} className="flex items-center space-x-2">
                        <Checkbox id={gender} />
                        <Label htmlFor={gender} className="text-sm font-normal cursor-pointer">
                          {gender}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <div className="flex-1">
              <div className="mb-4">
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

export default Sunglasses;
