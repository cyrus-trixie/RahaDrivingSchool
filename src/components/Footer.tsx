// components/Footer.tsx
import { Phone, Mail, MapPin, Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Raha Driving School</h3>
            </div>
            <p className="text-sm text-gray-400">
              Your journey to safe, confident driving starts here. We provide professional instruction with certified instructors and modern vehicles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {/* Main Office */}
              <li>
                <div className="flex items-start mb-2">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white">Main Office</p>
                    <p>Pioneer Plaza, Nakuru</p>
                    <div className="flex items-center mt-1">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      <a href="tel:+254707808565" className="hover:text-blue-400 transition-colors">+254 707 808565</a>
                    </div>
                    <div className="flex items-center mt-1">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      <a href="mailto:Rahadrivingsch@gmail.com" className="hover:text-blue-400 transition-colors break-all">Rahadrivingsch@gmail.com</a>
                    </div>
                  </div>
                </div>
              </li>
              {/* Nakuru Branch */}
              <li>
                <div className="flex items-start mb-2">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white">Nakuru Branch</p>
                    <p>Olive Inn, Kiamunyi</p>
                  </div>
                </div>
              </li>
              {/* Thika Branch */}
              <li>
                <div className="flex items-start mb-2">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-semibold text-white">Thika Branch</p>
                    <p>Wabera Street behind Zuri Centre, Thika</p>
                    <div className="flex items-center mt-1">
                      <Phone className="w-4 h-4 mr-2 text-blue-400" />
                      <a href="tel:0700076696" className="hover:text-blue-400 transition-colors">0700 076 696</a>
                    </div>
                    <div className="flex items-center mt-1">
                      <Mail className="w-4 h-4 mr-2 text-blue-400" />
                      <a href="mailto:rdsthika@gmail.com" className="hover:text-blue-400 transition-colors break-all">rdsthika@gmail.com</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Sat: 8:00 AM - 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 Raha Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;