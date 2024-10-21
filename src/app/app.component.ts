import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProductIndexComponent } from './components/product/product.component';

import { TProduct } from './services';
// import { products as data } from './data/products';
import { AsyncPipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { IProductsDataProvider, ProductsDataProvider } from './services/products.data-provider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductIndexComponent, NgFor, NgIf, AsyncPipe, HttpClientModule, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [ProductsDataProvider]
})
export class AppComponent implements OnInit {
  protected title: string = 'A2TestCourse';
  // protected products: TProduct[] = [];
  protected loading: boolean = false;
  protected products$!: Observable<TProduct[]>;
  // private productDataProvider;

  constructor(private productsDataProvider: ProductsDataProvider) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsDataProvider.list(5).pipe(
      tap(() => {
        this.loading = false;
      })
    );
    // this.products = [];
    // this.productsDataProvider.list(5).subscribe({
    //   next: (value) => {
    //     this.products = value;
    //     this.loading = false;
    //   },
    // });
  }

  
}
