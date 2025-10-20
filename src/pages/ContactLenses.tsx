import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactLenses = () => {
  const lensCategories = [
    {
      title: "Daily Disposable",
      description: "Fresh pair every day, maximum hygiene",
      price: "Starting from ₹899/box",
    },
    {
      title: "Monthly",
      description: "Convenient and cost-effective",
      price: "Starting from ₹599/box",
    },
    {
      title: "Colored Lenses",
      description: "Change your look instantly",
      price: "Starting from ₹1299/box",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-4xl font-bold">Contact Lenses</h1>
            <p className="mt-2 text-muted-foreground">Clear vision, no frames</p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid gap-6 md:grid-cols-3">
            {lensCategories.map((category) => (
              <Card key={category.title}>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{category.price}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="hero" className="w-full">Shop Now</Button>
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

export default ContactLenses;
