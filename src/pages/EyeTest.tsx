import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EyeTest = () => {
  const { toast } = useToast();
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    store: "",
    date: "",
    time: "",
  });

  const [prescriptionForm, setPrescriptionForm] = useState({
    rightSph: "",
    rightCyl: "",
    rightAxis: "",
    leftSph: "",
    leftCyl: "",
    leftAxis: "",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Confirmed!",
      description: "We'll send you a confirmation email shortly.",
    });
  };

  const handlePrescriptionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Prescription Saved",
      description: "Your prescription has been saved to your account.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="border-b bg-secondary/30 py-8">
          <div className="container">
            <h1 className="text-4xl font-bold">Eye Test & Services</h1>
            <p className="mt-2 text-muted-foreground">Professional eye care at your convenience</p>
          </div>
        </div>

        <div className="container py-12">
          {/* Free Eye Test Section */}
          <div className="mb-12 rounded-lg bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground md:p-12">
            <div className="grid gap-6 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Free In-Store Eye Test</h2>
                <p className="mb-6 text-lg opacity-90">
                  Get your vision tested by certified optometrists at any of our 500+ stores nationwide. 
                  Comprehensive eye examination including visual acuity, refraction, and eye health assessment.
                </p>
                <ul className="space-y-2 opacity-90">
                  <li>✓ No appointment fee</li>
                  <li>✓ Certified optometrists</li>
                  <li>✓ Latest testing equipment</li>
                  <li>✓ Prescription included</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Calendar className="h-48 w-48 opacity-20" />
              </div>
            </div>
          </div>

          {/* Tabs for different services */}
          <Tabs defaultValue="booking" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="booking">Book Eye Test</TabsTrigger>
              <TabsTrigger value="prescription">Upload Prescription</TabsTrigger>
              <TabsTrigger value="callback">Request Callback</TabsTrigger>
            </TabsList>

            {/* Book Appointment Tab */}
            <TabsContent value="booking">
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Eye Test</CardTitle>
                  <CardDescription>Schedule a free eye examination at your nearest store</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          required
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="store">Preferred Store Location *</Label>
                      <Input
                        id="store"
                        required
                        placeholder="e.g., Mumbai - Andheri West"
                        value={bookingForm.store}
                        onChange={(e) => setBookingForm({ ...bookingForm, store: e.target.value })}
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Input
                          id="time"
                          type="time"
                          required
                          value={bookingForm.time}
                          onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        />
                      </div>
                    </div>

                    <Button type="submit" size="lg" variant="hero" className="w-full">
                      Confirm Booking
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Upload Prescription Tab */}
            <TabsContent value="prescription">
              <Card>
                <CardHeader>
                  <CardTitle>Already Have a Prescription?</CardTitle>
                  <CardDescription>Upload your prescription or enter the details manually</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upload">Upload File</TabsTrigger>
                      <TabsTrigger value="manual">Enter Manually</TabsTrigger>
                    </TabsList>

                    <TabsContent value="upload" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="file">Upload Prescription Image/PDF</Label>
                        <Input id="file" type="file" accept=".jpg,.jpeg,.png,.pdf" />
                      </div>
                      <Button variant="hero" className="w-full">
                        <FileText className="mr-2 h-5 w-5" />
                        Upload Prescription
                      </Button>
                    </TabsContent>

                    <TabsContent value="manual">
                      <form onSubmit={handlePrescriptionSubmit} className="space-y-4">
                        <div>
                          <h4 className="mb-3 font-semibold">Right Eye (OD)</h4>
                          <div className="grid gap-3 md:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor="rightSph">SPH</Label>
                              <Input
                                id="rightSph"
                                placeholder="e.g., -2.00"
                                value={prescriptionForm.rightSph}
                                onChange={(e) => setPrescriptionForm({ ...prescriptionForm, rightSph: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="rightCyl">CYL</Label>
                              <Input
                                id="rightCyl"
                                placeholder="e.g., -0.50"
                                value={prescriptionForm.rightCyl}
                                onChange={(e) => setPrescriptionForm({ ...prescriptionForm, rightCyl: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="rightAxis">AXIS</Label>
                              <Input
                                id="rightAxis"
                                placeholder="e.g., 180"
                                value={prescriptionForm.rightAxis}
                                onChange={(e) => setPrescriptionForm({ ...prescriptionForm, rightAxis: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-3 font-semibold">Left Eye (OS)</h4>
                          <div className="grid gap-3 md:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor="leftSph">SPH</Label>
                              <Input
                                id="leftSph"
                                placeholder="e.g., -2.00"
                                value={prescriptionForm.leftSph}
                                onChange={(e) => setPrescriptionForm({ ...prescriptionForm, leftSph: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="leftCyl">CYL</Label>
                              <Input
                                id="leftCyl"
                                placeholder="e.g., -0.50"
                                value={prescriptionForm.leftCyl}
                                onChange={(e) => setPrescriptionForm({ ...prescriptionForm, leftCyl: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="leftAxis">AXIS</Label>
                              <Input
                                id="leftAxis"
                                placeholder="e.g., 180"
                                value={prescriptionForm.leftAxis}
                                onChange={(e) => setPrescriptionForm({ ...prescriptionForm, leftAxis: e.target.value })}
                              />
                            </div>
                          </div>
                        </div>

                        <Button type="submit" variant="hero" className="w-full">
                          Save Prescription
                        </Button>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Request Callback Tab */}
            <TabsContent value="callback">
              <Card>
                <CardHeader>
                  <CardTitle>We'll Call You</CardTitle>
                  <CardDescription>Prefer to speak with us? We'll call you back</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="callback-name">Full Name *</Label>
                      <Input id="callback-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="callback-phone">Phone Number *</Label>
                      <Input id="callback-phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="callback-message">Message (Optional)</Label>
                      <Textarea
                        id="callback-message"
                        placeholder="Let us know if you have any specific questions or concerns"
                        rows={4}
                      />
                    </div>
                    <Button variant="hero" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Request Callback
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EyeTest;
