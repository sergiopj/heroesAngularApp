import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})

export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  // use service in constructor
  constructor(
    // private declaration, this variable only shows in this component
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

  }

  // to navigate at hero info with index
  showHero(index: number) {
    this.router.navigate( ['/hero', index] );
  }

}

/* I create an interface so that the heroes data
always have the same structure */

export interface Heroe {
  name: string;
  bio: string;
  img: string;
  appearance: string;
  house: string;
}
