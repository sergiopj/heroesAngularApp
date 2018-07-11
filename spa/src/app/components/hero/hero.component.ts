import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {

  hero: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {

    // suscribe to event and get hero data with index
    this.activatedRoute.params.subscribe( params => {
      this.hero = this._heroesService.getHeroeById(params['id']);
    });

  }

  ngOnInit() {
  }

}
