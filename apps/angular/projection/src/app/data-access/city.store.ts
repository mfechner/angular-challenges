import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { City } from '../model/city.model';

@Injectable({
  providedIn: 'root',
})
export class CityStore {
  private cities = new BehaviorSubject<City[]>([]);
  cities$ = this.cities.asObservable();

  addAll(students: City[]) {
    this.cities.next(students);
  }

  addOne(city: City) {
    this.cities.next([...this.cities.value, city]);
  }

  deleteOne(id: number) {
    this.cities.next(this.cities.value.filter((s) => s.id !== id));
  }
}
