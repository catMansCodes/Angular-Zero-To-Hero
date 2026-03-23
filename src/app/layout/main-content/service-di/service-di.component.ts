import { CurrencyPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserserviceService } from '../../../services/userservice.service';
import { PageTitleComponent } from '../../page-title/page-title.component';

interface DemoUser {
  userName: string;
  userEmail: string;
}

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
  selector: 'app-service-di',
  imports: [PageTitleComponent, RouterLink, CurrencyPipe],
  templateUrl: './service-di.component.html',
})
export class ServiceDiComponent {
  private readonly userService = inject(UserserviceService);

  heading = signal<string>('Services & dependency injection in Angular');
  subHeading = signal<string>(
    'Use services for reusable logic and DI for testable, loosely coupled components.'
  );

  users = signal<DemoUser[]>([]);
  hasLoadedDemo = signal(false);

  products = signal<DemoProduct[]>([]);
  hasLoadedProductsDemo = signal(false);
  isLoadingProducts = signal(false);
  productsError = signal<string | null>(null);

  loadUsersFromService(): void {
    this.users.set(this.userService.getUserDataFromThisService());
    this.hasLoadedDemo.set(true);
  }

  resetDemo(): void {
    this.users.set([]);
    this.hasLoadedDemo.set(false);
  }

  loadProductsFromApi(): void {
    this.isLoadingProducts.set(true);
    this.productsError.set(null);

    this.userService.getProductList().subscribe({
      next: (response) => {
        const data = response as ProductListResponse;
        this.products.set(data.products ?? []);
        this.hasLoadedProductsDemo.set(true);
        this.isLoadingProducts.set(false);
      },
      error: () => {
        this.products.set([]);
        this.hasLoadedProductsDemo.set(true);
        this.productsError.set('Failed to load products. Check internet or API availability.');
        this.isLoadingProducts.set(false);
      },
    });
  }

  resetProductsDemo(): void {
    this.products.set([]);
    this.hasLoadedProductsDemo.set(false);
    this.isLoadingProducts.set(false);
    this.productsError.set(null);
  }
}
