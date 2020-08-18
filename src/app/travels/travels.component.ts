import { products } from './../products';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
  products=products;
  product;
  
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  ngOnInit() {
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
