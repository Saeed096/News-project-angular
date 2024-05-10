// import { Component, OnInit } from '@angular/core';
// import { iNews } from '../../Models/iNews';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// // import { ProductCardDirective } from '../../Directives/product-card.directive';
// import { CreditNumFormatPipe } from '../../Pipes/credit-num-format.pipe';
// // import { IproductServiceService } from '../../services/iproduct-service.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ApiIproductService } from '../../services/api-iproduct.service';

// @Component({
//   selector: 'app-details',
//   standalone: true,
//   imports: [CommonModule, CreditNumFormatPipe, UserCardDirective],
//   templateUrl: './details.component.html',
//   styleUrl: './details.component.css',
// })
// export class DetailsComponent implements OnInit {
//   news: iNews | undefined = {} as iNews;

//   constructor(
//     // private _productService: IproductServiceService,
//     private _activatedRoute: ActivatedRoute,
//     private _ApiIproductService: ApiIproductService
//   ) {}

//   ngOnInit(): void {
//     let currentPrdId: number = Number(
//       this._activatedRoute.snapshot.paramMap.get('id')
//     );
//     // console.log(currentPrdId);
//     // this.product = this._productService.getByPrdId(currentPrdId);
//     this._ApiIproductService.getByPrdId(currentPrdId).subscribe({
//       next: (res) => (this.news = res),
//       error: (err) => console.log(err),
//     });
//   }
// }
// // constructor() {

// // }
