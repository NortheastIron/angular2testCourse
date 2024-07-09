import { Component, Input } from '@angular/core';
import { TProduct } from '../../services';
import { CurrencyPipe, DecimalPipe, NgIf } from '@angular/common';

// import template from './product.component.html';

@Component({
    selector: 'product-index',
    standalone: true,
    imports: [CurrencyPipe, NgIf, DecimalPipe],
    templateUrl: './product.component.html',
    styleUrl: './product.component.less'
})
export class ProductIndexComponent {
    @Input() product!: TProduct;

    protected isShowDetails: boolean = false;

    protected onClick() {
        this.isShowDetails = !this.isShowDetails;
    }

}