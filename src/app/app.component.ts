import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero.component';
import {HeroService} from "./hero.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) {

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
}
