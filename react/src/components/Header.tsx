import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Bell, User, Globe, ChevronDown, ArrowRight, Play, Users, BookOpen, Target, Heart, Award, Calendar, Briefcase, MessageSquare, GraduationCap, Lightbulb, Stethoscope, Home, Info, Newspaper, Phone, Gift, Star, MapPin, FileText, Image } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [language, setLanguage] = useState('en');
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Updated menu structure based on your pages
  const navigationMenus = {
    about: {
      title: "About",
      items: [
        { title: "About Us", path: "/about", icon: Info, description: "Our vision and mission" },
        { title: "What We Do", path: "/what-we-do", icon: Target, description: "Our programs and initiatives" },
        { title: "Our Team", path: "/team", icon: Users, description: "Meet our dedicated team" },
        { title: "Impact/Success Stories", path: "/about#impact", icon: Award, description: "Success stories and achievements" }
      ]
    },
    programs: {
      title: "Programs",
      items: [
        { title: "Leadership Training", path: "/what-we-do#leadership", icon: Users, description: "Develop leadership skills" },
        { title: "Public Speaking", path: "/what-we-do#speaking", icon: MessageSquare, description: "Enhance communication skills" },
        { title: "Chess Coaching", path: "/what-we-do#chess", icon: Target, description: "Strategic thinking development" },
        { title: "Karate Training", path: "/what-we-do#karate", icon: Heart, description: "Martial arts and discipline" },
        { title: "Silambam Training", path: "/what-we-do#silambam", icon: Briefcase, description: "Traditional martial art" },
        { title: "Multilingual Learning", path: "/what-we-do#languages", icon: Globe, description: "Language skills development" },
        { title: "Classical Arts", path: "/what-we-do#arts", icon: BookOpen, description: "Cultural arts training" }
      ]
    },
    getInvolved: {
      title: "Get Involved",
      items: [
        { title: "Join Us", path: "/join-us", icon: Users, description: "Become a volunteer" },
        { title: "Opportunities", path: "/opportunities", icon: Briefcase, description: "Career and internship opportunities" },
        { title: "Donate", path: "/donate", icon: Gift, description: "Support our cause" },
        { title: "Partner With Us", path: "/join-us#partners", icon: Heart, description: "Collaboration opportunities" },
        { title: "Volunteer Stories", path: "/volunteer-stories", icon: Star, description: "Stories from our volunteers" }
      ]
    },
    resources: {
      title: "Resources",
      items: [
        { title: "Knowledge Center", path: "/knowledge", icon: BookOpen, description: "Educational resources" },
        { title: "News & Updates", path: "/news", icon: Newspaper, description: "Latest news and announcements" },
        { title: "Events", path: "/events", icon: Calendar, description: "Upcoming events and activities" },
        { title: "Gallery", path: "/gallery", icon: Image, description: "Photos and videos from our events" },
        { title: "Impact Reports", path: "/impact-reports", icon: FileText, description: "Annual and quarterly reports" },
        { title: "Contact Us", path: "/contact", icon: Phone, description: "Get in touch with us" }
      ]
    }
  };

  const DropdownMenu = ({ menuKey, menu }: { menuKey: string, menu: any }) => (
    <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-gray-100 py-4 min-w-[280px] z-50 animate-fade-in-up">
      <div className="px-4 pb-2 border-b border-gray-100">
        <h3 className="font-bold text-gray-900 text-lg">{menu.title}</h3>
      </div>
      <div className="py-2">
        {menu.items.map((item: any, index: number) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-start space-x-3 px-4 py-3 hover:bg-blue-50 transition-all duration-200 group"
            onClick={() => setActiveDropdown(null)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
              <item.icon className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="bg-white shadow-lg z-50" ref={dropdownRef}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-1.5">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-medium">Tamil Nadu, India</span>
            </span>
            <span className="text-blue-100">{new Date().toLocaleDateString('en-IN', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                className="flex items-center space-x-1 hover:text-blue-200 transition-colors"
                onClick={() => setActiveDropdown(activeDropdown === 'language' ? null : 'language')}
              >
                <Globe className="h-3.5 w-3.5" />
                <ChevronDown className="h-3 w-3" />
              </button>
              {activeDropdown === 'language' && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg py-2 min-w-[120px] animate-fade-in-up z-50">
                  <button 
                    onClick={() => setLanguage('en')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors"
                  >
                    English
                  </button>
                  <button 
                    onClick={() => setLanguage('ta')}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm transition-colors"
                  >
                    தமிழ் (Tamil)
                  </button>
                </div>
              )}
            </div>
            <Bell className="h-3.5 w-3.5 cursor-pointer hover:text-blue-200 transition-colors" />
            <a href="https://volunteer.voiceoftenkasi.org" target="_blank"> <User  className="h-3.5 w-3.5 cursor-pointer hover:text-blue-200 transition-colors" />
            </a>
            </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative flex items-center space-x-3">
              <img 
                src={logo} 
                alt="Voice of Tenkasi Logo" 
                className="h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Home Link */}
            <Link
              to="/"
              className={`flex items-center space-x-1.5 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 text-sm ${
                isActive('/') ? 'bg-blue-100 text-blue-600 shadow-sm' : 'text-gray-700'
              }`}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>

            {/* Dropdown Menus */}
            {Object.entries(navigationMenus).map(([key, menu]) => (
              <div
                key={key}
                className="relative inline-block"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ height: '100%' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                  <button
                    className="flex items-center space-x-1.5 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 text-gray-700 text-sm"
                  >
                    <span>{menu.title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute left-0 top-full z-50" style={{ minWidth: 280 }}>
                  {activeDropdown === key && (
                    <DropdownMenu menuKey={key} menu={menu} />
                  )}
                </div>
              </div>
            ))}

        
           
            <Link
              to="/contact"
              className={`px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 text-sm ${
                isActive('/contact') ? 'bg-blue-100 text-blue-600 shadow-sm' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
     
            
            <Link
              to="/join-us"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2 text-sm"
            >
              <span>Make an Impact</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-gray-200 animate-fade-in-up">
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              
              {/* About Section */}
              <div className="px-4 py-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">About</h4>
                <div className="space-y-1 ml-4">
                  <Link to="/about" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">About Us</Link>
                  <Link to="/what-we-do" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">What We Do</Link>
                </div>
              </div>

              {/* Programs Section */}
              <div className="px-4 py-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Programs</h4>
                <div className="space-y-1 ml-4">
                  <Link to="/what-we-do#leadership" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Leadership Training</Link>
                  <Link to="/what-we-do#speaking" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Public Speaking</Link>
                  <Link to="/what-we-do#chess" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Chess Coaching</Link>
                  <Link to="/what-we-do#karate" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Karate Training</Link>
                </div>
              </div>

              {/* Get Involved Section */}
              <div className="px-4 py-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Get Involved</h4>
                <div className="space-y-1 ml-4">
                  <Link to="/join-us" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Join Us</Link>
                  <Link to="/opportunities" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Opportunities</Link>
                  <Link to="/donate" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Donate</Link>
                </div>
              </div>

              {/* Resources Section */}
              <div className="px-4 py-2">
                <h4 className="font-semibold text-gray-900 text-sm mb-2">Resources</h4>
                <div className="space-y-1 ml-4">
                  <Link to="/knowledge" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Knowledge Center</Link>
                  <Link to="/news" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">News & Updates</Link>
                  <Link to="/events" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Events</Link>
                  <Link to="/contact" className="block px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors text-sm">Contact Us</Link>
                </div>
              </div>
            </nav>
            <div className="mt-4 px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;