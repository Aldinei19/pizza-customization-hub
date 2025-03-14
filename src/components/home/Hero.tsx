
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 -left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-60" />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        {/* Hero Text */}
        <div className="order-2 lg:order-1 animate-slide-up">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-6">
            A melhor experiência de pizza
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Sabor artesanal em <br className="hidden md:block" />
            <span className="text-primary">cada fatia.</span>
          </h1>
          <p className="text-muted-foreground max-w-lg mb-8 text-lg">
            Descubra o prazer de uma pizza verdadeiramente especial, feita com ingredientes selecionados e muito amor.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white text-base py-6 px-8"
              size="lg"
            >
              Fazer Pedido
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="bg-white/80 backdrop-blur-sm border-border hover:bg-white text-foreground text-base py-6 px-8"
              size="lg"
            >
              Ver Cardápio
            </Button>
          </div>
          
          {/* Stats or Trust Elements */}
          <div className="mt-12 grid grid-cols-3 gap-4">
            {['Delivery Rápido', 'Ingredientes Frescos', 'Receitas Especiais'].map((item, index) => (
              <div 
                key={index}
                className={cn(
                  "text-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-border/50",
                  "hover:shadow-subtle hover:bg-white transition-all duration-300 ease-out"
                )}
              >
                <p className="text-sm text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="order-1 lg:order-2 animate-fade-in">
          <div className="relative">
            <div className="aspect-square rounded-full bg-gradient-to-br from-secondary via-white to-secondary/70 p-8 max-w-xl mx-auto shadow-subtle overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop"
                alt="Pizza Deliciosa" 
                className="w-full h-full object-cover rounded-full shadow-lg animate-float"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-6 glass p-3 rounded-xl shadow-subtle animate-float">
              <div className="bg-primary/10 text-primary rounded-lg px-3 py-2 text-sm font-medium">
                Nova receita!
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-6 glass p-3 rounded-xl shadow-subtle animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="bg-primary rounded-full h-2 w-2"></div>
                <span className="text-sm font-medium">Entrega em 30 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-subtle">
        <div className="h-14 w-8 rounded-full border-2 border-foreground/20 flex items-start justify-center p-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
