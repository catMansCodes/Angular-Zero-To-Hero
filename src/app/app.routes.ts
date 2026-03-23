import { Routes } from '@angular/router';
import { HomeComponent } from './layout/main-content/home/home.component';
import { OverviewComponent } from './layout/main-content/overview/overview.component';
import { AngularComponentsComponent } from './layout/main-content/angular-components/angular-components.component';
import { LifeCycleComponent } from './layout/main-content/life-cycle/life-cycle.component';
import { DataBindingComponent } from './layout/main-content/data-binding/data-binding.component';
import { DirectivesComponent } from './layout/main-content/directives/directives.component';
import { PageNotFoundComponent } from './layout/main-content/page-not-found/page-not-found.component';
import { PipesComponent } from './layout/main-content/pipes/pipes.component';
import { SignalsComponent } from './layout/main-content/signals/signals.component';
import { RoutingComponent } from './layout/main-content/routing/routing.component';
import { ServiceDiComponent } from './layout/main-content/service-di/service-di.component';
import { ApisComponent } from './layout/main-content/apis/apis.component';
import { PerformanceComponent } from './layout/main-content/performance/performance.component';
import { StateComponent } from './layout/main-content/state/state.component';
import { TestingComponent } from './layout/main-content/testing/testing.component';
import { BuildDeployComponent } from './layout/main-content/build-deploy/build-deploy.component';
import { FormsComponent } from './layout/main-content/forms/forms.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'angular-components', component: AngularComponentsComponent },
    { path: 'life-cycle', component: LifeCycleComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'signals', component: SignalsComponent },
    { path: 'routing', component: RoutingComponent },
    
    { path: 'forms', component: FormsComponent },
    
    { path: 'service-di', component: ServiceDiComponent },
    
    { path: 'apis', component: ApisComponent },
    
    { path: 'performance', component: PerformanceComponent },
    { path: 'state', component: StateComponent },
    { path: 'testing', component: TestingComponent },
    { path: 'build-deploy', component: BuildDeployComponent },

    //keep this in last so it will no disturb other match
    { path: '**', component: PageNotFoundComponent },
];
