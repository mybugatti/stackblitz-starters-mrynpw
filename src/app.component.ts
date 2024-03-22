import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkActive, RouterLinkWithHref, RouterModule } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    SideNavComponent,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatTabsModule,
    RouterLinkActive,
    RouterLinkWithHref,
    AsyncPipe,
    MatButtonModule,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('App....')
  }
}