import { Component, OnInit } from '@angular/core';
import { MusicService } from '../_helpers/services/music.service';
import { DataService } from '../_helpers/services/data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private musicService: MusicService,
              private dataService: DataService) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.musicService.searchTracks(event.target.value)
    .pipe(debounceTime(10000))
    .subscribe(resp => {
        console.log(resp);
        this.dataService.sendMessage(resp);
      });
  }

}
