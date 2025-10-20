import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart } from "lucide-react";
import product1 from "@/assets/product-glasses-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState("gold");

  const product = {
    name: "Classic Metal Frame Eyeglasses",
    price: 1999,
    images: [product1, product1, product1],
    colors: ["gold", "silver", "black"],
    sizes: {
      eye: "52mm",
      bridge: "18mm",
      temple: "140mm",
    },
    description: [
      "Premium metal construction for durability",
      "Lightweight design for all-day comfort",
      "Adjustable nose pads for perfect fit",
      "Spring hinges for flexibility",
      "Suitable for prescription lenses",
    ],
    includes: ["Protective case", "Cleaning cloth", "Brand certificate"],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg border bg-secondary/20">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(0, 3).map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden rounded-lg border bg-secondary/20 cursor-pointer hover:border-primary"
                  >
                    <img
                      src={img}
                      alt={`View ${idx + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="mt-2 text-3xl font-bold text-primary">₹{product.price}</p>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Frame Size</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="rounded-lg border p-3 text-center">
                    <p className="font-medium">Eye</p>
                    <p className="text-muted-foreground">{product.sizes.eye}</p>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <p className="font-medium">Bridge</p>
                    <p className="text-muted-foreground">{product.sizes.bridge}</p>
                  </div>
                  <div className="rounded-lg border p-3 text-center">
                    <p className="font-medium">Temple</p>
                    <p className="text-muted-foreground">{product.sizes.temple}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold">Select Color</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 w-10 rounded-full border-2 capitalize ${
                        selectedColor === color ? "border-primary" : "border-border"
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={color}
                    />
                  ))}
                </div>
              </div>

              <Button size="lg" variant="hero" className="w-full">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <Tabs defaultValue="details" className="mt-8">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="lenses">Lens Information</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 pt-4">
                  <div>
                    <h3 className="mb-2 font-semibold">Product Features</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {product.description.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Package Includes</h3>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      {product.includes.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="lenses" className="space-y-4 pt-4">
                  <div>
                    <h3 className="mb-2 font-semibold">Lens Types Available</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Single Vision:</strong> For nearsightedness or farsightedness</li>
                      <li><strong>Bifocal:</strong> Two prescription powers in one lens</li>
                      <li><strong>Progressive:</strong> Multiple prescription powers without visible lines</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Lens Coatings</h3>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Anti-Glare:</strong> Reduces reflections and eye strain</li>
                      <li><strong>Blue Cut:</strong> Filters harmful blue light from screens</li>
                      <li><strong>UV Protection:</strong> Blocks harmful UV rays</li>
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
