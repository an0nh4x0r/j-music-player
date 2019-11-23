import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchTrack } from '../classes/search-track';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchTrack: SearchTrack[] = null;
  public subject: BehaviorSubject<SearchTrack[]> = new BehaviorSubject<SearchTrack[]>(this.searchTrack);

  sendMessage(searchTrackMesage: SearchTrack[]) {
    this.subject.next(searchTrackMesage);
  }

  getMessage(): Observable<SearchTrack[]> {
    return this.subject.asObservable();
  }
}
