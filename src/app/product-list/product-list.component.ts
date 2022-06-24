import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../module/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  product$!:Observable<Product[]>
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.product$= this.productService.getAllProducts()
                      // .subscribe(res=>{
                      //   this.product$=re
                      // })
  }

}
