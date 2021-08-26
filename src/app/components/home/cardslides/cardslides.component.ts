import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cardslides',
  templateUrl: './cardslides.component.html',
  styleUrls: ['./cardslides.component.css']
})
export class CardslidesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // navigate(){
  //   this.router.navigate(['/product-page'])
  // }
}
