import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/254707808565', '_blank');
  };

  const openGoogleMaps = () => {
    // A more specific Google Maps URL is better for direct user experience
    window.open('https://maps.app.goo.gl/NakuruLocation', '_blank'); 
  };

  const makeCall = () => {
    window.location.href = 'tel:+254707808565';
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
          {/* Phone & Email */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
            <CardHeader className="p-0 mb-4">
              <Phone className="w-9 h-9 text-blue-600 dark:text-blue-400 mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Phone & Email
              </CardTitle>
              <div className="space-y-2 text-sm">
                <a href="tel:+254707808565" className="block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors">
                  +254 707 808565
                </a>
                <a href="mailto:Rahadrivingsch@gmail.com" className="block text-blue-600 dark:text-blue-400 font-medium hover:underline transition-colors break-all">
                  Rahadrivingsch@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
            <CardHeader className="p-0 mb-4">
              <MessageCircle className="w-9 h-9 text-green-600 dark:text-green-400 mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                WhatsApp
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                Chat with us instantly
              </p>
              <Button 
                size="sm"
                onClick={openWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                Message Us
              </Button>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-white dark:bg-gray-800 rounded-xl">
            <CardHeader className="p-0 mb-4">
              <MapPin className="w-9 h-9 text-blue-600 dark:text-blue-400 mx-auto" />
            </CardHeader>
            <CardContent className="p-0">
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                Our Locations
              </CardTitle>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="font-semibold">Main Office:</p>
                <p className="mb-2">Pioneer Plaza, Nakuru</p>
                <p className="font-semibold">Branch:</p>
                <p>Olive Inn, Kiamunyi</p>
              </div>
              <Button 
                variant="outline"
                size="sm"
                onClick={openGoogleMaps}
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
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={makeCall}
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