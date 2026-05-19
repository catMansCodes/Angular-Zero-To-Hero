import { Component } from '@angular/core';
import { SideNavBarComponent } from "./side-nav-bar/side-nav-bar.component";
import { MainContentComponent } from "./main-content/main-content.component";

@Component({
  selector: 'app-layout',
  imports: [SideNavBarComponent, MainContentComponent],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}
