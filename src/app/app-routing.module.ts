import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundosOramaComponent } from './fundos-orama/fundos-orama.component';

const routes: Routes = [
  { path: '', component: FundosOramaComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
