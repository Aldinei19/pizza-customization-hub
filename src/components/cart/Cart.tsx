
import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartItem from './CartItem';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  
  return (
    <div className="glass rounded-2xl p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-serif font-medium flex items-center">
          <ShoppingCart className="mr-2 h-5 w-5" />
          Seu Carrinho
        </h2>
        {items.length > 0 && (
          <Button 
            variant="ghost" 
            className="text-sm hover:bg-destructive/10 hover:text-destructive"
            onClick={clearCart}
          >
            Limpar
          </Button>
        )}
      </div>
      
      {items.length === 0 ? (
        <div className="py-12 text-center">
          <div className="bg-secondary/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShoppingCart className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="font-medium text-lg mb-2">Seu carrinho está vazio</h3>
          <p className="text-muted-foreground text-sm mb-6">
            Adicione alguns itens para começar seu pedido
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90">
            Explorar Menu
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-1 max-h-[400px] overflow-y-auto pr-2">
            {items.map((item) => (
              <CartItem 
                key={item.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>
          
          {/* Cart Summary */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex justify-between mb-3">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">R$ {getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-3">
              <span className="text-muted-foreground">Taxa de entrega</span>
              <span className="font-medium">R$ 9.90</span>
            </div>
            <div className="flex justify-between text-lg font-semibold mt-4">
              <span>Total</span>
              <span>R$ {(getTotalPrice() + 9.90).toFixed(2)}</span>
            </div>
            
            <Button 
              className="w-full mt-6 bg-primary hover:bg-primary/90 text-white h-12"
            >
              Finalizar Pedido
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Frete grátis para pedidos acima de R$ 80,00
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
