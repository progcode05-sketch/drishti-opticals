import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import ProductCard from "@/components/ProductCard";
import product1 from "@/assets/product-glasses-1.jpg";
import product2 from "@/assets/product-glasses-2.jpg";

const Guide = () => {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState({
    faceShape: "",
    style: "",
    gender: "",
  });
  const [showResults, setShowResults] = useState(false);

  const faceShapes = [
    { value: "oval", label: "Oval", description: "Balanced proportions, slightly wider cheekbones" },
    { value: "round", label: "Round", description: "Soft curves, width and length similar" },
    { value: "square", label: "Square", description: "Strong jawline, angular features" },
    { value: "heart", label: "Heart", description: "Wider forehead, narrower chin" },
    { value: "diamond", label: "Diamond", description: "Narrow forehead and jawline, wider cheekbones" },
  ];

  const styles = [
    { value: "classic", label: "Classic", description: "Timeless and traditional" },
    { value: "professional", label: "Professional", description: "Sophisticated and business-ready" },
    { value: "trendy", label: "Trendy", description: "Modern and fashion-forward" },
    { value: "bold", label: "Bold", description: "Statement-making and unique" },
  ];

  const genders = [
    { value: "men", label: "Men" },
    { value: "women", label: "Women" },
    { value: "unisex", label: "Unisex" },
  ];

  const recommendations = [
    { id: "1", name: "Classic Metal Frame", price: 1999, image: product1, category: "Recommended" },
    { id: "2", name: "Modern Round Frame", price: 1799, image: product2, category: "Recommended" },
    { id: "3", name: "Designer Rectangle", price: 2299, image: product1, category: "Recommended" },
    { id: "4", name: "Trendy Cat-Eye", price: 2499, image: product2, category: "Recommended" },
  ];

  const handleAnswer = (field: string, value: string) => {
    setAnswers({ ...answers, [field]: value });
  };

  const handleNext = () => {
    if (quizStep < 2) {
      setQuizStep(quizStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setQuizStep(0);
    setAnswers({ faceShape: "", style: "", gender: "" });
    setShowResults(false);
  };

  if (showResults) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <div className="border-b bg-secondary/30 py-8">
            <div className="container">
              <h1 className="text-4xl font-bold">Your Perfect Matches</h1>
              <p className="mt-2 text-muted-foreground">Based on your preferences</p>
            </div>
          </div>

          <div className="container py-12">
            <div className="mb-8 text-center">
              <Button onClick={handleReset} variant="outline">
                Take Quiz Again
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {recommendations.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-4xl font-bold">Guide to Glasses</h1>
            <p className="mt-2 text-muted-foreground">Find your perfect frame in 3 simple steps</p>
          </div>
        </div>

        <div className="container py-12">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>
                  {quizStep === 0 && "Step 1: What is your Face Shape?"}
                  {quizStep === 1 && "Step 2: What's your Style?"}
                  {quizStep === 2 && "Step 3: What is your Gender?"}
                </CardTitle>
                <CardDescription>
                  {quizStep === 0 && "Select the shape that best matches your face"}
                  {quizStep === 1 && "Choose your preferred style aesthetic"}
                  {quizStep === 2 && "Select your gender preference"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {quizStep === 0 && (
                  <RadioGroup value={answers.faceShape} onValueChange={(v) => handleAnswer("faceShape", v)}>
                    {faceShapes.map((shape) => (
                      <div key={shape.value} className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary cursor-pointer">
                        <RadioGroupItem value={shape.value} id={shape.value} />
                        <div className="flex-1">
                          <Label htmlFor={shape.value} className="cursor-pointer">
                            <p className="font-semibold">{shape.label}</p>
                            <p className="text-sm text-muted-foreground">{shape.description}</p>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {quizStep === 1 && (
                  <RadioGroup value={answers.style} onValueChange={(v) => handleAnswer("style", v)}>
                    {styles.map((style) => (
                      <div key={style.value} className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary cursor-pointer">
                        <RadioGroupItem value={style.value} id={style.value} />
                        <div className="flex-1">
                          <Label htmlFor={style.value} className="cursor-pointer">
                            <p className="font-semibold">{style.label}</p>
                            <p className="text-sm text-muted-foreground">{style.description}</p>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                {quizStep === 2 && (
                  <RadioGroup value={answers.gender} onValueChange={(v) => handleAnswer("gender", v)}>
                    {genders.map((gender) => (
                      <div key={gender.value} className="flex items-start space-x-3 rounded-lg border p-4 hover:border-primary cursor-pointer">
                        <RadioGroupItem value={gender.value} id={gender.value} />
                        <Label htmlFor={gender.value} className="flex-1 cursor-pointer">
                          <p className="font-semibold">{gender.label}</p>
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                )}

                <div className="flex justify-between pt-4">
                  {quizStep > 0 && (
                    <Button variant="outline" onClick={() => setQuizStep(quizStep - 1)}>
                      Previous
                    </Button>
                  )}
                  <Button 
                    className="ml-auto"
                    onClick={handleNext}
                    disabled={
                      (quizStep === 0 && !answers.faceShape) ||
                      (quizStep === 1 && !answers.style) ||
                      (quizStep === 2 && !answers.gender)
                    }
                  >
                    {quizStep === 2 ? "See Results" : "Next"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Educational Content */}
            <div className="mt-12 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Anatomy of Glasses</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-semibold">Frame Front</h4>
                      <p className="text-sm text-muted-foreground">
                        The front part that holds the lenses and rests on your face
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Temples</h4>
                      <p className="text-sm text-muted-foreground">
                        The arms that extend to your ears to hold glasses in place
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Bridge</h4>
                      <p className="text-sm text-muted-foreground">
                        The part that rests on your nose and connects the lenses
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Nose Pads</h4>
                      <p className="text-sm text-muted-foreground">
                        Small cushions that provide comfort and adjustability
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eye Care Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <strong>20-20-20 Rule:</strong> Every 20 minutes, look at something 20 feet away for 20 seconds
                    </li>
                    <li>
                      <strong>Proper Lighting:</strong> Ensure adequate lighting when reading or working on screens
                    </li>
                    <li>
                      <strong>Regular Eye Tests:</strong> Get your eyes tested at least once every two years
                    </li>
                    <li>
                      <strong>Clean Your Glasses:</strong> Use microfiber cloth and lens cleaner daily
                    </li>
                    <li>
                      <strong>Healthy Diet:</strong> Include foods rich in vitamins A, C, and E for eye health
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Guide;
