import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero.component';
import {HeroService} from '../hero.service';

@Component({
  moduleId: 'module.id',
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  heroes: Hero[] = [];
  constructor( private _heroServise: HeroService) { }
  ngOnInit(): void {
    this._heroServise.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

}
