import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchTrack } from '../classes/search-track';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private httpClient: HttpClient) { }

  searchTracks(searchQuery: string): Observable<SearchTrack[]> {
    searchQuery = searchQuery.trim();

    const options = searchQuery ?
    { params: new HttpParams()
      .set('client_id', environment.CLIENT_ID)
      .set('q', searchQuery)
      .set('limit', '50') } : {};

    return this.httpClient.get<SearchTrack[]>(`${environment.apiUrl}/tracks`, options);
  }

}
