import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

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
  ) { }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();
    console.log('Data of heroes: ', this.heroes);

  }

}

/* I create an interface so that the heroes data
always have the same structure */

export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
