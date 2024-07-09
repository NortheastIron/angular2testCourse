import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductIndexComponent } from './components/product/product.component';

import { TProduct } from './services';
// import { products as data } from './data/products';
import { NgFor } from '@angular/common';
import { IProductsDataProvider, ProductsDataProvider } from './services/products.data-provider';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductIndexComponent, NgFor, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [ProductsDataProvider]
})
export class AppComponent implements OnInit {
  protected title = 'A2Test';
  protected products: TProduct[] = [];
  private productDataProvider: any = null;

  constructor(private productsDataProvider: ProductsDataProvider) {
  }

  ngOnInit(): void {
    this.productsDataProvider.list(5).subscribe({
      next: (value) => {
        this.products = value;
      },
    });
  }

  
}
