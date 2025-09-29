import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Input } from './ui/input';

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActiveLink = (href) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                Visakha
              </span>
              <span className="text-2xl font-bold text-slate-900 ml-1">
                Brand Factory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                  isActiveLink(item.href)
                    ? 'text-slate-900 border-b-2 border-slate-900'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    className="w-64"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="hover:bg-slate-100"
                >
                  <Search className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative hover:bg-slate-100">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-slate-900 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* User */}
            <Button variant="ghost" size="sm" className="hover:bg-slate-100">
              <User className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-4 w-4" />
            </Button>

            {/* Mobile Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-slate-900 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                        isActiveLink(item.href)
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 border-t">
                    <Button className="w-full mb-2" variant="outline">
                      <User className="h-4 w-4 mr-2" />
                      My Account
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden py-2 border-t">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full"
              autoFocus
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;