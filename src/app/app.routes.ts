import { Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { CartComponent } from './pages/cart/cart.component';

export const routes: Routes = [{ //homepage
    path: '',
    pathMatch: 'full',
    component: ProductsListComponent
},
{//cart
    path: 'cart',
    component: CartComponent,
},
];
