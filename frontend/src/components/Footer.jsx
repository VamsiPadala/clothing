import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const categories = [
    'Jeans', 'T-Shirts', 'Shirts', 'Joggers',
    'Shorts', 'Chinos', 'Hoodies', 'Jackets'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">
                Visakha Brand Factory
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              All Clothing Styles Under One Roof. Your trusted destination for quality fashion at affordable prices.
            </p>
            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-slate-800 text-white p-2"
                onClick={() => window.open('https://wa.me/919966888868', '_blank')}
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-slate-800 text-white p-2"
                onClick={() => window.open('https://facebook.com', '_blank')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="hover:bg-slate-800 text-white p-2"
                onClick={() => window.open('https://instagram.com', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to="/products"
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div>
                <p className="font-medium text-white">Location</p>
                <p>Tuni, Andhra Pradesh</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <a
                  href="tel:9966888868"
                  className="hover:text-white transition-colors"
                >
                  +91 9966888868
                </a>
              </div>
              <div>
                <p className="font-medium text-white">WhatsApp</p>
                <a
                  href="https://wa.me/919966888868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2024 Visakha Brand Factory. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="hover:text-white transition-colors">
                Returns & Exchanges
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;