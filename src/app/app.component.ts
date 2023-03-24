import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'WebDevTools';
  searchTerm: string = '';

  constructor(private router: Router) {}

  search() {
    this.router.navigate(['/search/' + this.searchTerm]);
  }
}
