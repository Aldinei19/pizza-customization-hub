
import React from 'react';
import { Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PizzaProps {
  pizza: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    tags: string[];
  };
}

const PizzaCard = ({ pizza }: PizzaProps) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-border/50 hover:shadow-lg hover-lift group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-square">
        <img 
          src={pizza.image} 
          alt={pizza.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Tags */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {pizza.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Rating */}
        <div className="absolute bottom-4 left-4 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full flex items-center shadow-sm">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
          <span className="text-xs font-medium">4.8</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-medium mb-2">{pizza.name}</h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
          {pizza.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="text-lg font-semibold">
            R$ {pizza.price.toFixed(2)}
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              "rounded-full h-10 w-10 bg-primary/10 text-primary hover:bg-primary hover:text-white",
              "transition-all duration-300 ease-out"
            )}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
