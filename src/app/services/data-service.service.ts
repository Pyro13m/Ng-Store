import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  url = '../assets/PRODUCT_DATA.json';

  prod_det : any;

  getAll(): any {
    return this.http.get<any>(this.url)
  }

  getOne(idx: number): any{
    return this.http.get<any>(this.url[idx])
  }
}
