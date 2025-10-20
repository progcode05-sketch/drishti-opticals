import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Glasses, Sun, Contact, Package, Truck, RotateCcw, Shield, Store } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-glasses-1.jpg";
import product2 from "@/assets/product-sunglasses-1.jpg";
import product3 from "@/assets/product-glasses-2.jpg";

const Home = () => {
  const bestsellers = [
    { id: "1", name: "Classic Metal Frame", price: 1999, image: product1, category: "Eyeglasses" },
    { id: "2", name: "Aviator Sunglasses", price: 2499, image: product2, category: "Sunglasses" },
    { id: "3", name: "Modern Round Frame", price: 1799, image: product3, category: "Eyeglasses" },
    { id: "4", name: "Premium Rectangle", price: 2299, image: product1, category: "Eyeglasses" },
  ];

  const categories = [
    { name: "Eyeglasses", icon: Glasses, link: "/eyeglasses", color: "text-primary" },
    { name: "Sunglasses", icon: Sun, link: "/sunglasses", color: "text-accent" },
    { name: "Contact Lenses", icon: Contact, link: "/contact-lenses", color: "text-primary" },
    { name: "Accessories", icon: Package, link: "/accessories", color: "text-accent" },
  ];

  const trustFeatures = [
    { icon: Truck, title: "Free Shipping", description: "On orders above ₹999" },
    { icon: RotateCcw, title: "14-Day Return", description: "Hassle-free returns" },
    { icon: Shield, title: "1-Year Warranty", description: "On all products" },
    { icon: Store, title: "500+ Stores", description: "Nationwide presence" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBanner})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          </div>
          
          <div className="container relative z-10 flex h-full items-center">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl">
                See the World in Sharp Focus
              </h1>
              <p className="text-xl text-muted-foreground">
                Vision for Everyone - Premium eyewear for every style and occasion
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="hero" asChild>
                  <Link to="/eyeglasses">Shop Eyeglasses</Link>
                </Button>
                <Button size="lg" variant="heroPrimary" asChild>
                  <Link to="/eye-test">Book Eye Test</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="container py-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Shop by Category</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="group rounded-lg border bg-card p-8 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <category.icon className={`mx-auto mb-4 h-12 w-12 ${category.color} transition-transform group-hover:scale-110`} />
                <h3 className="font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Bestsellers */}
        <section className="bg-secondary/30 py-16">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Bestsellers</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bestsellers.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" variant="outline" asChild>
                <Link to="/eyeglasses">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Guide to Glasses Teaser */}
        <section className="container py-16">
          <div className="rounded-lg border bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Not sure which frame suits you?</h2>
                <p className="mb-6 text-muted-foreground">
                  Take our Frame Finder quiz and discover the perfect eyewear based on your face shape, style preferences, and personality.
                </p>
                <Button size="lg" variant="hero" asChild>
                  <Link to="/guide">Find Your Perfect Frame</Link>
                </Button>
              </div>
              <div className="flex justify-center">
                <Glasses className="h-48 w-48 text-primary opacity-20" />
              </div>
            </div>
          </div>
        </section>

        {/* Eye Care Services */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">Free In-Store Eye Test</h2>
            <p className="mb-6 text-lg opacity-90">
              Get your eyes tested by certified optometrists at any of our 500+ stores
            </p>
            <Button size="lg" variant="outline" className="bg-background text-primary hover:bg-background/90" asChild>
              <Link to="/eye-test">Book Now</Link>
            </Button>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="container py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center">
                <feature.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
