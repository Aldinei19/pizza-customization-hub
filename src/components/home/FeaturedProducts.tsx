
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PizzaCard from '../products/PizzaCard';

// Sample data
const featuredPizzas = [
  {
    id: 1,
    name: 'Margherita Especial',
    description: 'A clássica pizza italiana com molho de tomate, mussarela de búfala, manjericão fresco e azeite de oliva extra virgem.',
    price: 49.90,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop',
    tags: ['Clássica', 'Vegetariana']
  },
  {
    id: 2,
    name: 'Pepperoni Supreme',
    description: 'Coberta com generosas fatias de pepperoni premium, queijo mussarela derretido e um toque de orégano.',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=1000&auto=format&fit=crop',
    tags: ['Picante', 'Especial']
  },
  {
    id: 3,
    name: 'Veggie Deluxe',
    description: 'Uma combinação perfeita de vegetais frescos, incluindo pimentões, cebolas, azeitonas, champignons e tomates.',
    price: 54.90,
    image: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?q=80&w=1000&auto=format&fit=crop',
    tags: ['Vegana', 'Saudável']
  },
  {
    id: 4,
    name: 'Frango com Catupiry',
    description: 'O sabor brasileiro que conquistou o mundo, com frango desfiado temperado e o autêntico catupiry.',
    price: 57.90,
    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?q=80&w=1000&auto=format&fit=crop',
    tags: ['Brasileira', 'Tradicional']
  }
];

const FeaturedProducts = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossas Pizzas Especiais</h2>
          <p className="text-muted-foreground text-lg">
            Feitas com ingredientes premium e assar em forno de pedra para obter aquela crosta perfeita.
          </p>
        </div>
        
        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredPizzas.map((pizza, index) => (
            <div 
              key={pizza.id} 
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PizzaCard pizza={pizza} />
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <Button 
            variant="outline" 
            className="group hover:bg-primary hover:text-white hover:border-primary"
            size="lg"
          >
            Ver Menu Completo
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
