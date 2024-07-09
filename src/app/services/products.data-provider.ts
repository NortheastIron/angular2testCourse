import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TProduct } from './types';

export interface IProductsDataProvider {
    getAll(): any;
}

@Injectable({
    providedIn: 'root'
})
export class ProductsDataProvider implements IProductsDataProvider {
    constructor(private http: HttpClient) {

    }

    public getAll(): Observable<TProduct[]> {
        return this.http.get<TProduct[]>('https://fakestoreapi.com/products?limit=5');
        // .subscribe({
        //     next: (val) => {
        //         console.log('val', val);
        //     },
        //     complete: () => {
        //         console.log('complete');
        //     }
        // });
    }
}