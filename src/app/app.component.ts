import { Component } from '@angular/core';
import { ApiService, User } from './services/api.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-unit-testing';

  user: User | undefined;

  constructor(private counterService: CounterService, private apiService: ApiService) {}

  getTitle(): string {
    return this.title;
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  getCounter() {
    return this.counterService.getCounter();
  }

  getRegistry() {
    return this.counterService.getRegistry();
  }

  getRandomUser() {
    this.apiService.getRandomUser().subscribe(response => {
      this.user = response.results[0];
    });
  }
}
