import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Accessories = () => {
  const accessories = [
    {
      title: "Lens Cleaning Kit",
      description: "Microfiber cloth and spray",
      price: "₹299",
    },
    {
      title: "Premium Cases",
      description: "Protect your eyewear",
      price: "₹499",
    },
    {
      title: "Eyewear Chains",
      description: "Stylish and functional",
      price: "₹399",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-4xl font-bold">Accessories</h1>
            <p className="mt-2 text-muted-foreground">Complete your eyewear experience</p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {accessories.map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="hero" className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accessories;
