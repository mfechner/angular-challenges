import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CityStore } from '../../data-access/city.store';
import { FakeHttpService, randomCity } from '../../data-access/fake-http.service';
import { CardComponent } from '../../ui/card/card.component';
import { ListItemComponent } from '../../ui/list-item/list-item.component';

@Component({
  selector: 'app-city-card',
  template: `
      <app-card
              [list]="cities$ | async"
              (add)="addCity()"
              class="bg-light-blue">
          <img src="assets/img/city.jpg" width="200px"/>
          <ng-template #rowRef let-city>
              <app-list-item (delete)="deleteCity(city.id)">
                  {{ city.name }}
              </app-list-item>
          </ng-template>
      </app-card>
  `,
  standalone: true,
  styles: `
    .bg-light-blue {
      background-color: rgba(0, 0, 250, 0.1);
    }
  `,
  imports: [
    CardComponent, AsyncPipe, ListItemComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityCardComponent implements OnInit {
  cities$ = this.store.cities$;

  constructor(private http: FakeHttpService, private store: CityStore) {}

  ngOnInit(): void {
    this.http.fetchCities$.subscribe((c) => this.store.addAll(c))
  }

  addCity() {
    this.store.addOne(randomCity());
  }

  deleteCity(id: number) {
    this.store.deleteOne(id);
  }
}
