import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero/hero.component';
import {HeroService} from "../hero.service";

import{Router} from '@angular/router';


@Component({
  moduleId: 'module.id',
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService, private _router: Router) {

  }
  getHeroes(): void{
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

}
