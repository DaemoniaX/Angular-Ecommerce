import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, RouterLink],
  template: `
    <div 
      class="bg-red-500/50 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <button class="text" routerLink="/">{{ title() }}</button>
      <app-primary-button 
        [label]="'Cart(' + cartService.cart().length + ')'"
        routerLink="/cart"
      ></app-primary-button>
    </div>
  `,
  styles: [``],
})
export class HeaderComponent {

  //title = 'Test ecomm App'; //cela marche, mais est obsolète devant la technologie "signals API"
  title = signal('Home catStore'); // pour la data dynamique
  //cart = signal('Cart');

  cartService = inject(CartService);
}
