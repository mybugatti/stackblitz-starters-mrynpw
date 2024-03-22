import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive, RouterLinkWithHref, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatTabsModule,
    RouterLinkActive,
    RouterLinkWithHref,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  standalone: true
})
export class SideNavComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}