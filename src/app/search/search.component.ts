import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchTerm: string | null = '';

  constructor(
    private route: ActivatedRoute
  ) {
    this.searchTerm = this.route.snapshot.paramMap.get('searchTerm');
  }

  ngOnInit(): void {
  }

}
