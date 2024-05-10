import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iAuthor } from '../../Models/iAuthor';
import { CommonModule } from '@angular/common';
import { ApiIauthorService } from '../../services/api-iAuthor.service';
import { UserNews } from '../user-news/user-news.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ UserNews ,FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  authors: iAuthor[];
   selectedAuthorId: number; 
  // billItems: OrderItemVM[];
  // nums: number[];
  totalOrderPrice: number = 0;
  previousCount: number = 0;
  @ViewChild('itemCount') itemCountInput! : ElementRef;

  constructor(private _ApiIAuthorService : ApiIauthorService) {
    // this.nums = [];
     this.selectedAuthorId = 0;
    // this.billItems = [];
    this.authors =[]; 
  }
  ngOnInit(): void {
    this._ApiIAuthorService.getAll().subscribe({
      next : (res) => {console.log(res),
        this.authors = res;
        // this.categories = res
      },
      error : (err) => {console.log(err)}
       
    });
  }

  // updateBill(orderItem: OrderItemVM) {
  //   console.log(orderItem);

  //   this.billItems.push(orderItem); 
  //   console.log(this.billItems);
  //   this.totalOrderPrice += orderItem.totalItemPrice;
  // }

  // removeItem(id: number, totalItemPrice: number) {
  //   this.billItems = this.billItems.filter((i) => i.id != id);
  //   this.totalOrderPrice -= +totalItemPrice;
  // }

  // totalOrderPriceChanged() {
  //    this.totalOrderPrice = 0;
  //   this.billItems.forEach(item => {
  //     this.totalOrderPrice += item.quantity * item.price;
  //   });
  // }

  // updateStockQuantity() {
  //   console.log(this.itemCountInput.nativeElement.value);
  //   this.billItems.forEach((item) => {
  //     let index = this._IproductServiceService.getAll()?.findIndex((p) => p.id == item.id);
  //      this._IproductServiceService.getAll()[index].id -=
  //       +this.itemCountInput.nativeElement.value;
  //   });

    // this.billItems = [];
    // this.totalOrderPrice = 0;
  }

