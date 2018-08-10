import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public value = '';
  
  constructor() { }

  ngOnInit() {
  } 

  searchHero( term: string) {
    this.value = term;
    console.log(this.value);
  }

}
