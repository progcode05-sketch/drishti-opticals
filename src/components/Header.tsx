import { Link } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-primary">Drishti Opticals</h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/eyeglasses" className="transition-colors hover:text-primary">
            Eyeglasses
          </Link>
          <Link to="/sunglasses" className="transition-colors hover:text-primary">
            Sunglasses
          </Link>
          <Link to="/contact-lenses" className="transition-colors hover:text-primary">
            Contact Lenses
          </Link>
          <Link to="/accessories" className="transition-colors hover:text-primary">
            Accessories
          </Link>
          <Link to="/guide" className="transition-colors hover:text-primary">
            Guide to Glasses
          </Link>
          <Link to="/eye-test" className="transition-colors hover:text-primary">
            Eye Test
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button
  variant="ghost"
  size="icon"
  onClick={() => signInWithPopup(auth, provider)}
>
  <User className="h-5 w-5" />
  <span className="sr-only">Account</span>
</Button>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
            <span className="sr-only">Account</span>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
