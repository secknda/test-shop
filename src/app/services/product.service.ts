import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../module/product.model";

@Injectable({
    providedIn:'root'
})

export class ProductService{
    constructor(private http:HttpClient){}

    products=new BehaviorSubject<any>([]);
    public cartItemList : any =[];


    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>('https://fakestoreapi.com/products/');
    }

    addtoCard(product:Product){
        this.cartItemList.push(product);
        this.products.next(product);

    }
}