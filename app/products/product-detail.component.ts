import { Component } from '@angular/core';

import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';
import { OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  ngOnInit(): void {
    //  // + castring to number
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.getProduct(id);

// using resolve on a observable 
    this.route.data.subscribe(
      data => {
        const resolvedData: ProductResolved = data['resolvedData'];
        this.errorMessage = resolvedData.error;
        this.onProductRetrieved(resolvedData.product);
      }
    )

    // this.route.paramMap.subscribe(
    //   params => {
    //     const id = +params.get('id');
    //     this.getProduct(id);
    //   }
    // )

    // const resolvedData : ProductResolved = this.route.snapshot.data['resolvedData'];
    // this.errorMessage = resolvedData.error;
    // this.onProductRetrieved(resolvedData.product);
  }

  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
      product => this.onProductRetrieved(product),
      error => this.errorMessage = <any>error);
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
