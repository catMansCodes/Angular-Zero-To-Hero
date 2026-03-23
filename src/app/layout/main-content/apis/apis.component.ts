import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiReference, UserserviceService } from '../../../services/userservice.service';
import { PageTitleComponent } from '../../page-title/page-title.component';

interface DemoProduct {
  id: number;
  title: string;
  category: string;
  price: number;
}

interface ProductListResponse {
  products: DemoProduct[];
}

@Component({
  selector: 'app-apis',
  imports: [PageTitleComponent, RouterLink, CurrencyPipe],
  templateUrl: './apis.component.html',
})
export class ApisComponent {
  private readonly userService = inject(UserserviceService);

  heading = signal<string>('APIs in Angular');
  subHeading = signal<string>(
    'HttpClient integration, mock APIs, storage choices, and practical API demos.'
  );

  apiReferences = signal<ApiReference[]>(this.userService.getApiReferences());

  products = signal<DemoProduct[]>([]);
  hasLoadedProducts = signal(false);
  isLoadingProducts = signal(false);
  productsError = signal<string | null>(null);

  loadProductsDemo(): void {
    this.isLoadingProducts.set(true);
    this.productsError.set(null);

    this.userService.getProductList().subscribe({
      next: (response) => {
        const data = response as ProductListResponse;
        this.products.set(data.products ?? []);
        this.hasLoadedProducts.set(true);
        this.isLoadingProducts.set(false);
      },
      error: () => {
        this.products.set([]);
        this.hasLoadedProducts.set(true);
        this.productsError.set('Failed to load products from API.');
        this.isLoadingProducts.set(false);
      },
    });
  }

  resetProductsDemo(): void {
    this.products.set([]);
    this.hasLoadedProducts.set(false);
    this.isLoadingProducts.set(false);
    this.productsError.set(null);
  }
}
