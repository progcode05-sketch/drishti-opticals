import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <CardContent className="p-0">
          <div className="aspect-square overflow-hidden bg-secondary/20">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start p-4">
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        {category && (
          <p className="text-xs text-muted-foreground mt-1">{category}</p>
        )}
        <div className="mt-2 flex w-full items-center justify-between">
          <p className="text-lg font-semibold">₹{price}</p>
          <Button size="sm" variant="outline">
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
