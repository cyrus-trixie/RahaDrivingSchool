import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/254707808565', '_blank');
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=Pioneer+Plaza+Nakuru', '_blank');
  };

  const makeCall = () => {
    window.location.href = 'tel:+254707808565';
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your driving journey? Get in touch with us today 
            to book your first lesson or learn more about our courses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="shadow-lg text-center">
            <CardHeader>
              <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Phone & Email</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a
                  href="tel:+254707808565"
                  className="block text-primary font-semibold hover:underline"
                >
                  +254 707 808565
                </a>
                <a
                  href="mailto:Rahadrivingsch@gmail.com"
                  className="block text-primary font-semibold hover:underline text-sm break-all"
                >
                  Rahadrivingsch@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg text-center">
            <CardHeader>
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Chat with us</p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={openWhatsApp}
              >
                Message Us
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg text-center">
            <CardHeader>
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Our Locations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground text-sm">
                <p className="font-semibold">Main Office:</p>
                <p className="mb-2">Pioneer Plaza, Nakuru</p>
                <p className="font-semibold">Branch:</p>
                <p>Olive Inn, Kiamunyi</p>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                onClick={openGoogleMaps}
                className="mt-4">
                View Main Office Map
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-lg text-center">
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Mon - Fri: 8AM - 6PM<br />
                Sat: 8AM - 4PM<br />
                Sun: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us today to schedule your first driving lesson. 
              Our friendly staff will help you choose the right course.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={openWhatsApp}>
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button variant="outline" size="lg" onClick={makeCall}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;