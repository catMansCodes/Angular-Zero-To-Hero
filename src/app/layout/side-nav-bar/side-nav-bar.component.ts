import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-nav-bar.component.html',
})
export class SideNavBarComponent {
  private readonly router = inject(Router);

  /** Components section in the sidebar: highlight for /angular-components and related demos (e.g. /life-cycle). */
  isComponentsNavActive(): boolean {
    const path = this.router.url.split('?')[0].split('#')[0];
    if (path === '/life-cycle' || path === '/data-binding') {
      return true;
    }
    return path === '/angular-components' || path.startsWith('/angular-components/');
  }
}
