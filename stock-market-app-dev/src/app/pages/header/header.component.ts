import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navigate: boolean = true;

  constructor(private routing: Router) { }

  ngOnInit(): void {
  }

  goStockDataPage() {
    if (this.navigate === true) {
    this.routing.navigate(['/stock-data']);
    } else {
      console.log('Do not navigate');
    }
  }

}
