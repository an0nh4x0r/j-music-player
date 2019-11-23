import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSharingService {

  subject: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor() { }

  sendMessage(message: any) {
    this.subject.next(message);
  }
}
