import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockDataComponent } from './pages/stock-data/stock-data.component';

const routes: Routes = [
  { path: 'stock-data', component: StockDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
