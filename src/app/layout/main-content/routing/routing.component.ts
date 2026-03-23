import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

export interface RoutingEmployee {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-routing',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './routing.component.html',
})
export class RoutingComponent {
  private readonly router = inject(Router);

  heading = signal<string>('Routing in Angular');
  subHeading = signal<string>(
    'Configure the router, pass data in the URL, lazy-load features, and navigate from code.'
  );

  readonly userDemo = {
    name: 'Jarvis',
    age: 25,
    email: 'jarvis@example.com',
  };

  readonly employees: RoutingEmployee[] = [
    { id: 101, name: 'jarvis', email: 'jarvis@example.com' },
    { id: 102, name: 'tony', email: 'tony@example.com' },
    { id: 103, name: 'stark', email: 'stark@example.com' },
  ];

  navigateToProfileWithQuery(): void {
    this.router.navigate(['/profile'], {
      queryParams: {
        userDetail: JSON.stringify(this.userDemo),
      },
    });
  }
}
