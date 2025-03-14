
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import PizzaCustomizer from '@/components/ui/PizzaCustomizer';
import Cart from '@/components/cart/Cart';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Products */}
        <FeaturedProducts />
        
        {/* Pizza Customizer Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Crie Sua Pizza Perfeita</h2>
              <p className="text-muted-foreground text-lg">
                Personalize cada detalhe para criar uma experiência única que atenda ao seu gosto.
              </p>
            </div>
            
            <PizzaCustomizer />
          </div>
        </section>
        
        {/* Shopping Cart */}
        <section className="section-padding bg-secondary/20">
          <div className="container-custom max-w-3xl">
            <Cart />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
