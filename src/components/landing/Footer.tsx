import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import logoMain from "@/assets/logo-main.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 pb-24 md:pb-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <img 
              src={logoMain} 
              alt="ScubaDiveIn Logo" 
              className="h-16 mb-4 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 mb-4">
              Andaman's premier PADI 5-Star dive center. Transforming passionate divers into certified professionals since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Beach No. 5, Havelock Island, Andaman & Nicobar Islands, India - 744211</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@scubadivein.com" className="hover:text-white transition-colors">info@scubadivein.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/70">
              <li><a href="#course-timeline" className="hover:text-white transition-colors">Zero to Hero Program</a></li>
              <li><a href="#lead-form" className="hover:text-white transition-colors">Check Eligibility</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-secondary-foreground/50">
          <p>© 2025 ScubaDiveIn. All rights reserved. PADI 5-Star Dive Center #S-12345</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
