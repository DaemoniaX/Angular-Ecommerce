// src/app/services/cart.service.ts
import { Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/products.model';
// Changelog 04/09/2025 @AntoninMarolleau : was letting ppl add more than the avalaible stock => fixed + popup warning

@Injectable({ providedIn: 'root' })
export class CartService {
  cart = signal<CartItem[]>([]);

  addToCart(product: Product) {
    const available = product.stock ?? 0;
    if (available > 0) {
      this.cart.update(items => {
        const idx = items.findIndex(i => i.id === product.id);
        if (idx > -1) {
          const updated = [...items];
          const current = updated[idx];

          if (current.quantity < available) { //fix 04/09/2025
            updated[idx] = {
              ...current,
              quantity: current.quantity + 1
            };
          } else {
            alert(`Out of stock for "${product.title}". You can't add more.`);
          }
          return updated;
        } else {
          return [...items, { ...product, quantity: 1 }];
        }
      });
    } else {
      alert(`"${product.title}" is out of stock and cannot be added.`);
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
