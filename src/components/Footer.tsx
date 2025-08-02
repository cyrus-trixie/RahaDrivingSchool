const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Raha Driving School</h3>
            <p className="text-primary-foreground/80">
              Professional driving instruction with experienced, certified instructors. 
              Your journey to safe driving starts here.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-primary-foreground">About Us</a></li>
              <li><a href="#courses" className="hover:text-primary-foreground">Courses</a></li>
              <li><a href="#gallery" className="hover:text-primary-foreground">Gallery</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+254707808565" className="hover:text-primary-foreground">Phone: +254 707 808565</a>
              </li>
              <li>Email: info@raha.co.ke</li>
              <li>Main: Pioneer Plaza, Nakuru</li>
              <li>Branch: Olive Inn, Kiamunyi</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 Raha Driving School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;