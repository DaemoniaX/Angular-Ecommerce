import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PriceFilterComponent } from '../../components/price-filter/price-filter.component';


@Component({
  selector: 'app-products-list',
  imports: [CommonModule, ProductCardComponent, SearchBarComponent, HttpClientModule, PriceFilterComponent],
  template: ` 
    <app-search-bar (searchChanged)="searchQuery.set($event)" (filterToggled)="showFilter.set(!showFilter())"></app-search-bar>

    <div class="w-full max-w-xl mx-auto">
      <div *ngIf="showFilter()" class="mb-4">
        <app-price-filter [globalMin]="minAvailable()" [globalMax]="maxAvailable()" (rangeChanged)="onRangeChanged($event)"></app-price-filter>
      </div>
    </div>

    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of filteredProducts(); track product.id) {
        <app-product-card [product]="product" />
      }
    </div>
  `,
  styles: ``
})
export class ProductsListComponent {
  allProducts = signal<Product[]>([]);
  searchQuery = signal('');
  priceRange = signal<{ min: number; max: number }>({ min: 0, max: Number.POSITIVE_INFINITY });
  showFilter = signal(false);

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<Product[]>('http://localhost:64240/api/products')//there is no need to change this if you use the backend I've provided
      .subscribe({
        next: data => this.allProducts.set(data),
        error: () => {
          // fallback : if API fails, use hardcoded data
          console.log('Failed to load products from API, using fallback data.');
          this.allProducts.set([
            { id: 1, title: 'If I\'m here it means that backend is NOT connected - CC0', price: 25.50, image: 'https://cdn.stocksnap.io/img-thumbs/960w/cat-grooming_7BXCZNT5JF.jpg', stock: 23 },
            { id: 2, title: 'Cute kitten sleeping - CC0', price: 199.99, image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=600', stock: 0 },
            { id: 3, title: 'Cute little kitten - CC0', price: 999999, image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg', stock: 999 },
            { id: 4, title: 'Regular street cat - CC0', price: 15.99, image: 'https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?cs=srgb&dl=pexels-wojciech-kumpicki-1084687-2071882.jpg&fm=jpg', stock: 7 },
            { id: 5, title: 'Kitten - CC0', price: 11.99, image: 'https://cdn.stocksnap.io/img-thumbs/960w/animal-face_FSFNTYVLHH.jpg', stock: 11 },
            { id: 6, title: 'Leopard\'s paw - CC0', price: 33.99, image: 'https://cdn.stocksnap.io/img-thumbs/960w/leopard-nature_Z9KWOGE8YS.jpg', stock: 50 },
            { id: 7, title: 'Yawn - CC0', price: 68.00, image: 'https://cdn.stocksnap.io/img-thumbs/960w/leopard-nature_3YWYBJ2TPW.jpg', stock: 18 },
            { id: 8, title: 'Bored stare - CC0', price: 75.75, image: 'https://cdn.stocksnap.io/img-thumbs/960w/animal-face_GZW89D8X6K.jpg', stock: 14 },
            { id: 9, title: 'black & white cat - CC0', price: 11000.00, image: 'https://cdn.stocksnap.io/img-thumbs/960w/cat-pet_VFQTYEC60T.jpg', stock: 57 },
            { id: 10, title: 'Brown & white cat - SRC national geopraghic Joel Sartore', price: 109.95, image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200', stock: 1 }
          ]);
        }
      });
  }

  minAvailable = computed(() => {
    const arr = this.allProducts();
    if (!arr || !arr.length) return 0;
    return Math.min(...arr.map(p => p.price));
  });

  maxAvailable = computed(() => {
    const arr = this.allProducts();
    if (!arr || !arr.length) return 0;
    return Math.max(...arr.map(p => p.price));
  });

  filteredProducts = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    const pr = this.priceRange();
    const min = pr?.min ?? this.minAvailable();
    const max = pr?.max === Number.POSITIVE_INFINITY ? this.maxAvailable() : pr?.max ?? this.maxAvailable();

    let list = this.allProducts();
    if (q) list = list.filter(p => p.title.toLowerCase().includes(q));
    return list.filter(p => p.price >= min && p.price <= max);
  });

  onRangeChanged(range: { min: number; max: number }) {
    const min = Number.isFinite(range.min) ? range.min : this.minAvailable();
    const max = Number.isFinite(range.max) ? range.max : this.maxAvailable();
    this.priceRange.set({ min, max });
  }
}

export type { Product };

