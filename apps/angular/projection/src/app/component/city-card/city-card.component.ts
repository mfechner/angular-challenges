import { Component, OnInit } from '@angular/core';
import { CityStore } from '../../data-access/city.store';

@Component({
  selector: 'app-city-card',
  template: 'TODO City',
  standalone: true,
  imports: [],
})
export class CityCardComponent implements OnInit {
  cities$ = this.store.cities$;

  constructor(
    private http: FakeHttpService,
    private store: CityStore,
  ) {}
}
