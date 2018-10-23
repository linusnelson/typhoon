import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { ProductCard} from './ProductCard';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {
  private url = "../assets/ProductsCard.json";
  constructor(private http: HttpClient) { }
  getProductCardDetails(){
    return this.http.get<ProductCard[]>(this.url);
  }
}
