import { Routes } from '@angular/router';
import { HomeComponent } from './layout/main-content/home/home.component';
import { OverviewComponent } from './layout/main-content/overview/overview.component';
import { AngularComponentsComponent } from './layout/main-content/angular-components/angular-components.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'angular-components', component: AngularComponentsComponent },
  
];
