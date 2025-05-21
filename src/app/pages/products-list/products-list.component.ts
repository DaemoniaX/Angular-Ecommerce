import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: ` 
  
  <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
    <app-product-card [product]="product" />
    }
  </div>
  
  `,
  styles: ``
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Brown & white cat - SRC national geopraghic Joel Sartore',
      price: 109.95,
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200',
      stock: 1,
    },
    {
      id: 2,
      title: 'Cute kitten sleeping - CC0',
      price: 199.99,
      image:
        'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600',
      stock: 0,
    },
    {
      id: 3,
      title: 'Cute little kitten - CC0',
      price: 999999,

      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg',
      stock: 999,
    },
    {
      id: 4,
      title: 'Regular street cat - CC0',
      price: 15.99,
      image: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-1084687-2071882.jpg&fm=jpg',
      stock: 7,
    },
  ]);
}
export type { Product };

