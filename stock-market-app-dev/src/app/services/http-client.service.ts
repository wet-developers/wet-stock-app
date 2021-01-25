import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class Product {
  constructor(
    public  productId: string,
    public  name: string,
    public  code: string,
    public  title: string,
    public  description: string,
    public  imgUrl: string,
    public  price: string,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    console.log('Test Call..');
    return this.httpClient.get<Product[]>('http://localhost:8080/products');
  }

  // getProductJSONData(value: Object[]) {
  //   console.log(this.httpClient.get('assets/contents/products.json'));
  //   console.log(value);
  //   //return this.httpClient.get('assets/contents/products.json').pipe(map(res => res.json()));
  // }
  // getJSON(value: Object[]): Observable<any> {
  //   return this.httpClient.get('../../assets/players.json').pipe((res: any) => res.json()
  //    )
  // }
  getJSONData(): Observable<any> {
    return this.httpClient.get('../../assets/contents/products.json');
  }
}


