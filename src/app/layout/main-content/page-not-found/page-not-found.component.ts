import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {
  private readonly location = inject(Location);
  private readonly router = inject(Router);

  goBack(): void {
    this.location.back();
  }

  attemptedPath(): string {
    return this.router.url || '/';
  }
}
