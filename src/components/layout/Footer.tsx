
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-serif font-bold tracking-tight">
                Pizzaria<span className="text-primary">Delícia</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Entregando sabor e qualidade em cada fatia, nossa missão é fazer das suas refeições momentos especiais.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Links Rápidos</h3>
            <div className="grid gap-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/menu">Menu</FooterLink>
              <FooterLink href="/about">Sobre Nós</FooterLink>
              <FooterLink href="/contact">Contato</FooterLink>
            </div>
          </div>
          
          {/* Help & Policies */}
          <div>
            <h3 className="text-lg font-medium mb-6">Ajuda & Suporte</h3>
            <div className="grid gap-3">
              <FooterLink href="/faq">Perguntas Frequentes</FooterLink>
              <FooterLink href="/terms">Termos de Serviço</FooterLink>
              <FooterLink href="/privacy">Política de Privacidade</FooterLink>
              <FooterLink href="/delivery">Informações de Entrega</FooterLink>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contato</h3>
            <div className="space-y-4">
              <ContactItem icon={<MapPin size={18} />}>
                Av. Paulista, 1000 - São Paulo, SP
              </ContactItem>
              <ContactItem icon={<Phone size={18} />}>
                (11) 99999-9999
              </ContactItem>
              <ContactItem icon={<Mail size={18} />}>
                contato@pizzariadelicia.com
              </ContactItem>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Pizzaria Delícia. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido com ❤️ por Lovable.dev</p>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="h-9 w-9 bg-white rounded-full flex items-center justify-center text-foreground/70 hover:text-primary hover:shadow-sm hover-lift"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    to={href} 
    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
  >
    {children}
  </Link>
);

const ContactItem = ({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex items-start">
    <div className="text-primary mt-0.5 mr-3">{icon}</div>
    <span className="text-sm text-muted-foreground">{children}</span>
  </div>
);

export default Footer;
