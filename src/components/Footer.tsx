import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Drishti Opticals</h3>
            <p className="text-sm text-muted-foreground">
              Vision for Everyone
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/stores" className="text-muted-foreground hover:text-primary">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-muted-foreground hover:text-primary">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Stay Updated</h4>
            <p className="mb-3 text-sm text-muted-foreground">
              Subscribe to our newsletter
            </p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="flex-1" />
              <Button size="sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Drishti Opticals. All rights reserved.</p>
          <p className="mt-2">
            <span className="font-medium">📍</span> Multiple Locations | 
            <span className="font-medium"> 📞</span> 1-800-DRISHTI | 
            <span className="font-medium"> ✉️</span> info@drishtiopticals.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
