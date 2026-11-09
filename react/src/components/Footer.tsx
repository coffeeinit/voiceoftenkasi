import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
            <Link to="/">
                <img 
                  src={logo}
                  alt="Voice of Tenkasi Logo" 
                  className="h-20 w-auto brightness-0 invert hover:scale-105 transition-transform"
                />
              </Link>
              </div>
              <p className="text-blue-200 text-sm">Empowering Lives, Enriching Futures</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              We are a community in pursuit of realizing a developed Tenkasi region through 
              technology, education and sustainable initiatives.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-400 p-3 rounded-lg transition-all duration-200 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-all duration-200 transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-blue-700 p-3 rounded-lg transition-all duration-200 transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-all duration-200 transform hover:scale-110">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-200">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">About Us</Link></li>
              <li><Link to="/what-we-do" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">What We Do</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Events</Link></li>
              <li><Link to="/opportunities" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Opportunities</Link></li>
              <li><Link to="/knowledge" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Knowledge</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-200">Programs</h4>
            <ul className="space-y-3">
              <li><Link to="/join-us" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Join Us</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Contact</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Donate</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-200">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-1 text-blue-400" />
                <span className="text-sm">6/281A, Bharathi Thenvadal St, Viswanathaperi, Sivagiri Tk, Tenkasi Dt, 627757</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-sm">87782 00402</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-sm">info@voiceoftenkasi.org</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © Voice of Tenkasi Foundation, 2023. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;