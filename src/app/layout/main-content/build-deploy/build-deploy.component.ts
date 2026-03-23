import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageTitleComponent } from '../../page-title/page-title.component';

@Component({
  selector: 'app-build-deploy',
  imports: [PageTitleComponent, RouterLink],
  templateUrl: './build-deploy.component.html',
})
export class BuildDeployComponent {
  heading = signal<string>('Build & deploy Angular apps');
  subHeading = signal<string>(
    'Production builds, environments, hosting choices, SSR, and static pre-rendering.'
  );
}
