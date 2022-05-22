import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CODComponent } from './calc/cod/cod.component';

const routes: Routes = [{ path: 'calc/cod', component: CODComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
