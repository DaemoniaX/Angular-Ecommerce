// src/app/components/cart-item/cart-item.component.ts
import { Component, inject, input, computed } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';
import { ButtonComponent } from '../../../components/button/button.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex gap-4 items-center">
      <img [src]="item().image" class="w-[50px] h-[50px] object-contain" />
      <div class="flex flex-col">
        <span class="text-md font-bold">{{ item().title }}</span>
        <span class="text-sm">
          {{ '$' + item().price + ' x' + item().quantity }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button (click)="cartService.decreaseQuantity(item().id)">–</button>
        <span>{{ item().quantity }}</span>
        <button (click)="cartService.addToCart(item())">+</button>
      </div>

      <div class="flex-1"></div>
      <app-button
        label="Remove"
        (btnClicked)="cartService.removeFromCart(item().id)"
      />
    </div>
  `,
  styles: [``],
})
export class CartItemComponent {
  item = input.required<CartItem>();

  cartService = inject(CartService);
}
