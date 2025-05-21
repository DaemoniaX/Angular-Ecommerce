import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  template: `
    <app-header />
    <router-outlet />

    <footer class="bg-black text-white py-4 text-center">
      About us &nbsp; Contact
    </footer>
  `,
  styles: [],
})
export class AppComponent {}
