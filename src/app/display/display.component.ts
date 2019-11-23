import { Component, OnInit } from '@angular/core';
import { DataService } from '../_helpers/services/data.service';
import { SearchTrack } from '../_helpers/classes/search-track';
import { AllSharingService } from '../_helpers/services/all-sharing.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  searchTrack: SearchTrack[];

  constructor(private dataService: DataService,
              private allSharingService: AllSharingService) { }

  ngOnInit() {
    this.dataService.subject
      .subscribe(resp => {
        this.searchTrack = resp;
      });
  }

  play(streamUrl: string, artworkUrl: string) {
    this.allSharingService.sendMessage({
      streamUrl,
      artworkUrl
    });
  }

}
