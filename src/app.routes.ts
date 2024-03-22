import { Routes } from '@angular/router';
import { Data1ListComponent } from './data1-list.component';
import { Data2ListComponent } from './data2-list.component';

export const routes: Routes = [
  {
      path: '',
      pathMatch: 'full',
      redirectTo: '/data1',
  },
  {
      path: 'data1',
      component: Data1ListComponent,
  },
  {
      path: 'data2',
      component: Data2ListComponent,
  },
];