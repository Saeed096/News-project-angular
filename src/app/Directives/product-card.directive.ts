//  import { Directive, ElementRef, HostListener, Input ,OnInit } from '@angular/core';

// @Directive({
//   selector: '[ProductCard]',
//   standalone: true
// })
// export class ProductCardDirective implements OnInit {

//   @Input('ProductCard') defaultBgColor : string = 'white'; 
//   constructor(private elementRef : ElementRef)
//    {
//      this.elementRef.nativeElement.style.borderRadius='7%';
//      this.elementRef.nativeElement.style.boxShadow='8px 8px 16px black';
//    }

//    ngOnInit(): void {
//     this.elementRef.nativeElement.style.backgroundColor=`${this.defaultBgColor}`;
//    }

//   @HostListener('mouseover') onMouseOver()
//    {
//     this.elementRef.nativeElement.style.boxShadow='8px 8px 10px black';
//    }

   
//   @HostListener('mouseleave') onMouseLeave()
//   {
//    this.elementRef.nativeElement.style.boxShadow='8px 8px 16px black';
//   }
// }
