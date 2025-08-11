// components/Footer.tsx
import { Phone, Mail, MapPin, Car } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-[#BBBBBB] py-16 border-t border-[#2E2E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-[#00FF84]" />
              <h3 className="text-2xl font-bold text-white">Raha Driving School</h3>
            </div>
            <p className="text-sm text-[#888888]">
              Your journey to safe, confident driving starts here. We provide professional instruction with certified instructors and modern vehicles.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", href: "#about" },
                { label: "Courses", href: "#courses" },
                { label: "Gallery", href: "#gallery" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#00FF84] transition-colors text-[#888888]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-6 text-sm">
              {/* Nakuru Main Office */}
              <li>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-[#00FF84] mt-1" />
                  <div>
                    <p className="font-semibold text-white">Nakuru Main Office</p>
                    <p>Pioneer Plaza, Nakuru</p>
                    <div className="flex items-center mt-1">
                      <Phone className="w-4 h-4 mr-2 text-[#00FF84]" />
                      <a
                        href="tel:+254707808565"
                        className="hover:text-[#00FF84] transition-colors"
                      >
                        +254 707 808565
                      </a>
                    </div>
                    <div className="flex items-center mt-1">
                      <Mail className="w-4 h-4 mr-2 text-[#00FF84]" />
                      <a
                        href="mailto:Rahadrivingsch@gmail.com"
                        className="hover:text-[#00FF84] transition-colors break-all"
                      >
                        Rahadrivingsch@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Kaimunyi Branch */}
              <li>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-[#00FF84] mt-1" />
                  <div>
                    <p className="font-semibold text-white">Kaimunyi Branch</p>
                    <p>Olive Inn, Kaimunyi</p>
                    <div className="flex items-center mt-1">
                      <Phone className="w-4 h-4 mr-2 text-[#00FF84]" />
                      <a
                        href="tel:+254707808565"
                        className="hover:text-[#00FF84] transition-colors"
                      >
                        +254 707 808565
                      </a>
                    </div>
                    <div className="flex items-center mt-1">
                      <Mail className="w-4 h-4 mr-2 text-[#00FF84]" />
                      <a
                        href="mailto:rdskamunyi@gmail.com"
                        className="hover:text-[#00FF84] transition-colors break-all"
                      >
                        rdskamunyi@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* Thika Branch */}
              <li>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 text-[#00FF84] mt-1" />
                  <div>
                    <p className="font-semibold text-white">Thika Branch</p>
                    <p>Wabera Street behind Zuri Centre, Thika</p>
                    <div className="flex items-center mt-1">
                      <Phone className="w-4 h-4 mr-2 text-[#00FF84]" />
                      <a
                        href="tel:0700076696"
                        className="hover:text-[#00FF84] transition-colors"
                      >
                        0700 076 696
                      </a>
                    </div>
                    <div className="flex items-center mt-1">
                      <Mail className="w-4 h-4 mr-2 text-[#00FF84]" />
                      <a
                        href="mailto:rdsthika@gmail.com"
                        className="hover:text-[#00FF84] transition-colors break-all"
                      >
                        rdsthika@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-[#888888]">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Sat: 8:00 AM - 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-[#2E2E2E] mt-12 pt-8 text-center text-sm text-[#555]">
          <p>&copy; 2025 Raha Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
