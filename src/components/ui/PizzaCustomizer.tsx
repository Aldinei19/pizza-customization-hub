
import React, { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Pizza sizes
const sizes = [
  { id: 'p', name: 'Pequena', inches: '8"', price: 39.90 },
  { id: 'm', name: 'Média', inches: '10"', price: 49.90 },
  { id: 'g', name: 'Grande', inches: '12"', price: 59.90 },
  { id: 'gg', name: 'Família', inches: '14"', price: 69.90 },
];

// Pizza crusts
const crusts = [
  { id: 'traditional', name: 'Tradicional' },
  { id: 'thin', name: 'Fina e Crocante' },
  { id: 'thick', name: 'Borda Recheada' },
];

// Toppings
const toppings = [
  { id: 'cheese_extra', name: 'Queijo Extra', price: 5.00 },
  { id: 'pepperoni', name: 'Pepperoni', price: 7.00 },
  { id: 'mushrooms', name: 'Champignon', price: 5.00 },
  { id: 'onions', name: 'Cebola', price: 3.00 },
  { id: 'olives', name: 'Azeitonas', price: 4.00 },
  { id: 'peppers', name: 'Pimentões', price: 4.00 },
  { id: 'pineapple', name: 'Abacaxi', price: 6.00 },
  { id: 'ham', name: 'Presunto', price: 7.00 },
];

const PizzaCustomizer = () => {
  const [selectedSize, setSelectedSize] = useState('m');
  const [selectedCrust, setSelectedCrust] = useState('traditional');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  
  // Calculate total price
  const basePrice = sizes.find((size) => size.id === selectedSize)?.price || 0;
  const toppingsPrice = selectedToppings.reduce((total, toppingId) => {
    const topping = toppings.find((t) => t.id === toppingId);
    return total + (topping?.price || 0);
  }, 0);
  
  const totalPrice = (basePrice + toppingsPrice) * quantity;
  
  // Handle topping selection
  const toggleTopping = (toppingId: string) => {
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };
  
  // Handle quantity change
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  return (
    <div className="glass rounded-2xl p-6 animate-scale-in max-w-3xl mx-auto">
      <h2 className="text-2xl font-serif font-medium mb-6">Customize sua Pizza</h2>
      
      {/* Size Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Tamanho</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              className={cn(
                "py-4 px-2 rounded-xl border border-border/50 text-center transition-all",
                selectedSize === size.id 
                  ? "bg-primary/10 border-primary/50 shadow-inner" 
                  : "hover:bg-secondary/50"
              )}
              onClick={() => setSelectedSize(size.id)}
            >
              <div className="text-lg font-medium mb-1">{size.name}</div>
              <div className="text-sm text-muted-foreground">{size.inches}</div>
              <div className="text-sm font-medium mt-2">R$ {size.price.toFixed(2)}</div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Crust Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Tipo de Massa</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {crusts.map((crust) => (
            <button
              key={crust.id}
              className={cn(
                "py-3 px-4 rounded-xl border border-border/50 text-center transition-all",
                selectedCrust === crust.id 
                  ? "bg-primary/10 border-primary/50 shadow-inner" 
                  : "hover:bg-secondary/50"
              )}
              onClick={() => setSelectedCrust(crust.id)}
            >
              <div className="text-base font-medium">{crust.name}</div>
            </button>
          ))}
        </div>
      </div>
      
      {/* Toppings Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">Ingredientes Extra</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {toppings.map((topping) => {
            const isSelected = selectedToppings.includes(topping.id);
            return (
              <button
                key={topping.id}
                className={cn(
                  "py-3 px-4 rounded-xl border text-center transition-all relative",
                  isSelected 
                    ? "bg-primary/10 border-primary text-primary shadow-inner" 
                    : "border-border/50 hover:bg-secondary/50"
                )}
                onClick={() => toggleTopping(topping.id)}
              >
                {isSelected && (
                  <div className="absolute -top-2 -right-2 h-6 w-6 bg-primary text-white rounded-full flex items-center justify-center">
                    <Check className="h-3 w-3" />
                  </div>
                )}
                <div className="text-base font-medium">{topping.name}</div>
                <div className="text-sm text-muted-foreground mt-1">+ R$ {topping.price.toFixed(2)}</div>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Quantity and Add to Cart */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-6 border-t border-border/50">
        {/* Quantity */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <Button 
            variant="outline" 
            size="icon" 
            className="h-9 w-9 rounded-full"
            onClick={decrementQuantity}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="text-lg font-medium w-8 text-center">{quantity}</span>
          <Button 
            variant="outline" 
            size="icon" 
            className="h-9 w-9 rounded-full"
            onClick={incrementQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Price and Add to Cart */}
        <div className="flex items-center space-x-4">
          <div className="text-xl font-medium">
            R$ {totalPrice.toFixed(2)}
          </div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCustomizer;
