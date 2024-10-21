import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, throwError } from 'rxjs';
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
        return this.http.get<TProduct[]>('https://fakestoreapi.com/products');
    }

    public list(size: number = 2000) {
        return this.http.get<TProduct[]>('https://fakestoreapi.com/products', {
            params: new HttpParams({
                fromObject: {
                    limit: size
                }
            })
        }).pipe(
            delay(1000),
            catchError(this.errorHandler)
        );
    }

    private errorHandler(error: HttpErrorResponse) {
        return throwError(() => error.message);
    }
}