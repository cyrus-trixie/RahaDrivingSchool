// components/Contact.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  // Function to open Google Maps for a specific address
  const openGoogleMapsAddress = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=Raha+Driving+School+Thika{encodeURIComponent(address)}`, '_blank');
  };

  const makeCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your driving journey? Reach out today to book your first lesson or get more information.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main Office Contact */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
            <CardHeader className="p-0 mb-4">
              <Phone className="w-9 h-9 text-blue-600 dark:text-blue-400 mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Main Office
              </CardTitle>
              <div className="space-y-2 text-sm">
                <a href="tel:+254707808565" className="block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors">
                  +254 707 808565
                </a>
                <a href="mailto:Rahadrivingsch@gmail.com" className="block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors break-all">
                  Rahadrivingsch@gmail.com
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Pioneer Plaza, Nakuru</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openGoogleMapsAddress("Pioneer Plaza, Nakuru")}
                className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900"
              >
                View Map
              </Button>
            </CardContent>
          </Card>

          {/* Nakuru Branch Contact */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
            <CardHeader className="p-0 mb-4">
              <MapPin className="w-9 h-9 text-blue-600 dark:text-blue-400 mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Nakuru Branch
              </CardTitle>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                <p>Olive Inn, Kiamunyi</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openGoogleMapsAddress("Olive Inn, Kiamunyi, Nakuru")}
                className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900"
              >
                View Map
              </Button>
            </CardContent>
          </Card>
            
          {/* Thika Branch Contact */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
            <CardHeader className="p-0 mb-4">
              <Phone className="w-9 h-9 text-blue-600 dark:text-blue-400 mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Thika Branch
              </CardTitle>
              <div className="space-y-2 text-sm">
                <a href="tel:0700076696" className="block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors">
                  0700 076 696
                </a>
                <a href="mailto:rdsthika@gmail.com" className="block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors break-all">
                  rdsthika@gmail.com
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-2">Wabera Street, behind Zuri Centre, Thika</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openGoogleMapsAddress("Wabera Street, behind Zuri Centre, Thika")}
                className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900"
              >
                View Map
              </Button>
            </CardContent>
          </Card>

          {/* Operating Hours */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
            <CardHeader className="p-0 mb-4">
              <Clock className="w-9 h-9 text-blue-600 dark:text-blue-400 mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Hours
              </CardTitle>
              <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>Mon - Fri: 8AM - 6PM</p>
                <p>Sat: 8AM - 4PM</p>
                <p>Sun: Closed</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <div className="bg-primary/10 dark:bg-primary/20 py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              Let’s Get You on the Road
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              Our friendly team is here to guide you every step of the way.
              Choose the contact method that works for you and let’s get rolling!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => openWhatsApp("254707808565")}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => makeCall("+254707808565")}
                className="text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
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