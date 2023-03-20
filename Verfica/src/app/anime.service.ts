import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  searchProd(query: string) {
    const url = `https://api.jikan.moe/v4/anime?q=one%20piece`;
    const headers = new HttpHeaders({
      Authorization: ""
    });

    let obsProd = this.http.get(url, { headers });
    return obsProd;
    //Ritorno un observable ai componenti che richiedono il servizio
  }
}
