import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButtonComponent } from "../../../components/primary-button/primary-button.component";
import { CartService } from '../../../services/cart.service';
//Changelog 04/09/2025 @AntoninMarolleau : weird grid for product => tailwind grid responsive mobile/pc

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent],
  template: `
    <div 
      class="bg-red-500/20 shadow-md border-white rounded p-6 flex flex-col justify-between items-center relative w-full h-[400px]"
    >
      <div class="flex flex-col items-center">
        <img
          [src]="product().image" 
          class="w-[200px] h-[200px] object-contain"
        />
        <div class="flex flex-col mt-2 text-center">
          <span class="text-md font-bold">{{product().title}}</span>
          <span class="text-sm font-bold">{{'€' + product().price}}</span>
          <app-primary-button 
            label="Add to cart" 
            class="mt-3" 
            (buttonClicked)="this.cartService.addToCart(product());"
          /> 
        </div>
      </div>

      <span class="absolute top-2 right-3 text-sm font-bold"
        [class]="product().stock ? 'text-green-500' : 'text-red-500'">
          @if (product().stock){
            {{product().stock}} left
          } @else {
            Out of stock
          }
      </span>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  cartService = inject(CartService);

  product = input.required<Product>();
}
