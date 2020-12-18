import { Component, OnInit } from '@angular/core';
import {HttpClientService, Product} from '../../services/http-client.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})
export class StockDataComponent implements OnInit {

  products: Product[] = [];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getProducts().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  
  handleSuccessfulResponse(response: Product[]) {
    this.products = response;
}

}
