// components/Contact.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const openWhatsApp = (phoneNumber: string) => {
    // The phone number needs to be in international format without '+'
    const formattedNumber = phoneNumber.replace(/\+/g, "");
    window.open(`https://wa.me/${formattedNumber}`, "_blank");
  };

  const openGoogleMapsAddress = (address: string) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, "_blank");
  };

  const makeCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] text-[#BBBBBB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#00FF84] mb-4">Get In Touch</h2>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto">
            Ready to start your driving journey? Reach out today to book your first lesson or get more information.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Office Cards */}
          {[
            {
              title: "Nakuru Main Office",
              icon: <Phone className="w-9 h-9 text-[#00FF84] mx-auto" />,
              phone: "+254707808565",
              email: "Rahadrivingsch@gmail.com",
              location: "Pioneer Plaza, Nakuru",
            },
            {
              title: "Kaimunyi Branch",
              icon: <MapPin className="w-9 h-9 text-[#00FF84] mx-auto" />,
              phone: "+254707808565", // Assuming same phone for now, as no specific number was provided for this branch
              email: "rdskamunyi@gmail.com",
              location: "Olive Inn, Kaimunyi",
            },
            {
              title: "Thika Branch",
              icon: <Phone className="w-9 h-9 text-[#00FF84] mx-auto" />,
              phone: "0700076696",
              email: "rdsthika@gmail.com",
              location: "Wabera Street, behind Zuri Centre, Thika",
            },
            {
              title: "Hours",
              icon: <Clock className="w-9 h-9 text-[#00FF84] mx-auto" />,
              hours: true,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="shadow-lg hover:shadow-xl transition-shadow text-center p-6 bg-[#1A1A1A] rounded-xl flex flex-col justify-between h-full"
              >
                <CardHeader className="p-0 mb-4">{item.icon}</CardHeader>
                <CardContent className="p-0 flex-grow flex flex-col justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-white mb-3">{item.title}</CardTitle>
                    {item.hours ? (
                      <div className="text-sm text-[#888888] leading-relaxed">
                        <p>Mon - Fri: 8AM - 6PM</p>
                        <p>Sat: 8AM - 4PM</p>
                        <p>Sun: Closed</p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-sm">
                        {item.phone && (
                          <a
                            href={`tel:${item.phone}`}
                            className="block text-[#00FF84] font-medium hover:underline"
                          >
                            {item.phone}
                          </a>
                        )}
                        {item.email && (
                          <a
                            href={`mailto:${item.email}`}
                            className="block text-[#00FF84] font-medium hover:underline break-all"
                          >
                            {item.email}
                          </a>
                        )}
                        <p className="text-[#888888] mt-2">{item.location}</p>
                      </div>
                    )}
                  </div>
                  {!item.hours && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openGoogleMapsAddress(item.location)}
                      className="w-full mt-4 border-[#00FF84] text-[#00FF84] hover:bg-[#00FF8420] rounded-full"
                    >
                      View Map
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center">
        <div className="bg-[#1A1A1A] border-t border-[#2E2E2E] py-12">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-extrabold text-white mb-4">
              Let’s Get You on the Road
            </h3>
            <p className="text-[#888888] mb-8 text-lg">
              Our friendly team is here to guide you every step of the way.
              Choose the contact method that works for you and let’s get rolling!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                onClick={() => openWhatsApp("+254707808565")}
                className="bg-[#00FF84] hover:bg-[#00e876] text-black rounded-full shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => makeCall("+254707808565")}
                className="border-[#00FF84] text-[#00FF84] hover:bg-[#00FF8420] rounded-full"
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
