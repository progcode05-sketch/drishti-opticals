import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [shippingMethod, setShippingMethod] = useState("standard");

  const handlePlaceOrder = () => {
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your order. We'll send you a confirmation email shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-4xl font-bold">Checkout</h1>
            <p className="mt-2 text-muted-foreground">Complete your order</p>
          </div>
        </div>

        <div className="container py-12">
          <div className="mx-auto max-w-4xl">
            {/* Progress Steps */}
            <div className="mb-8 flex justify-between">
              {["Shipping", "Payment", "Review"].map((label, idx) => (
                <div
                  key={label}
                  className={`flex items-center ${idx < 2 ? "flex-1" : ""}`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      step > idx + 1
                        ? "bg-primary text-primary-foreground"
                        : step === idx + 1
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span className="ml-2 text-sm font-medium">{label}</span>
                  {idx < 2 && (
                    <div className="mx-4 h-0.5 flex-1 bg-border" />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Shipping */}
            {step === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input id="address" required />
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input id="state" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input id="pincode" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <Button
                    onClick={() => setStep(2)}
                    variant="hero"
                    className="w-full"
                  >
                    Continue to Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle>Shipping & Payment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="mb-3 font-semibold">Shipping Method</h3>
                    <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
                      <div className="flex items-center space-x-3 rounded-lg border p-4">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <p className="font-semibold">Standard Delivery</p>
                          <p className="text-sm text-muted-foreground">5-7 business days - Free</p>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border p-4">
                        <RadioGroupItem value="express" id="express" />
                        <Label htmlFor="express" className="flex-1 cursor-pointer">
                          <p className="font-semibold">Express Delivery</p>
                          <p className="text-sm text-muted-foreground">2-3 business days - ₹199</p>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="mb-3 font-semibold">Payment Method</h3>
                    <RadioGroup defaultValue="card">
                      <div className="flex items-center space-x-3 rounded-lg border p-4">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border p-4">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          UPI
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 rounded-lg border p-4">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                          Net Banking
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => setStep(3)}
                      variant="hero"
                      className="flex-1"
                    >
                      Review Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>₹1999</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (GST 18%)</span>
                      <span>₹360</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹2359</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={handlePlaceOrder}
                      variant="hero"
                      className="flex-1"
                    >
                      Place Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
