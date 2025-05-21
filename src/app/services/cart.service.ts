// src/app/services/cart.service.ts
import { Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/products.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  cart = signal<CartItem[]>([]);

  addToCart(product: Product) {
    const available = product.stock ?? 0;
    if(available > 0){
      this.cart.update(items => {
      const idx = items.findIndex(i => i.id === product.id);
      if (idx > -1) {
        const updated = [...items];
        updated[idx] = {
          ...updated[idx],
          quantity: updated[idx].quantity + 1
        };
        return updated;
      } else {
        return [...items, { ...product, quantity: 1 }];
      }
      });
    }else{

    }
  }

  removeFromCart(id: number) {
    this.cart.update(items =>
      items.filter(i => i.id !== id)
    );
  }

  decreaseQuantity(id: number) {
    this.cart.update(items => {
      const idx = items.findIndex(i => i.id === id);
      if (idx === -1) return items;
      const updated = [...items];
      const item = updated[idx];
      if (item.quantity > 1) {
        updated[idx] = { ...item, quantity: item.quantity - 1 };
        return updated;
      } else {
        return updated.filter(i => i.id !== id);
      }
    });
  }
}
