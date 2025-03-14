
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "glass py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
        >
          <span className="text-2xl font-serif font-bold tracking-tight">
            Pizzaria<span className="text-primary">Delícia</span>
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">Sobre</NavLink>
          <NavLink to="/contact">Contato</NavLink>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative hover:bg-primary/10">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-primary/10">
            <User className="h-5 w-5" />
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Fazer Pedido
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden button-transition" 
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 glass-dark md:hidden transition-all duration-300 ease-in-out flex flex-col pt-24",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none -translate-y-5"
        )}
      >
        <div className="container-custom flex flex-col space-y-6">
          <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
          <MobileNavLink to="/menu" onClick={toggleMobileMenu}>Menu</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMobileMenu}>Sobre</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Contato</MobileNavLink>
          
          <div className="pt-6 flex space-x-4">
            <Button className="flex-1 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/10">
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Carrinho (0)
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

// NavLink Component
const NavLink = ({ children, to }: { children: React.ReactNode; to: string }) => {
  return (
    <Link 
      to={to} 
      className="text-foreground/90 hover:text-primary relative button-transition font-medium text-sm after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
    >
      {children}
    </Link>
  );
};

// Mobile NavLink Component
const MobileNavLink = ({ children, to, onClick }: { children: React.ReactNode; to: string; onClick: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-white text-2xl font-serif tracking-tight hover:text-primary transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
