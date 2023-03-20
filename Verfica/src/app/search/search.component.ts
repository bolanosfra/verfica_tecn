import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string | undefined;
  obsProd: Observable<Object> | undefined;
  results: any;

  // faccio iniettare lo food service e faccio una ricerca
  constructor(public anime: AnimeService) {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsProd = this.anime.searchProd(this.query);
    this.obsProd.subscribe((data: any) => {
      this.results = data;
      console.log(this.results);
    });
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
  }

  }
}
