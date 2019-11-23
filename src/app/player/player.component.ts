import { Component, OnInit } from '@angular/core';
import { AllSharingService } from '../_helpers/services/all-sharing.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  clientConst = '?client_id=1512fb9cbe8228095fe92c6503e3a071';

  constructor(private allSharingService: AllSharingService) { }

  ngOnInit() {
    this.allSharingService.subject.subscribe(resp => {
      console.log('response: ' + typeof resp);
      if (resp.streamUrl !== undefined) {
        console.log(resp);
        document.getElementById('audio-player-source').setAttribute('src', resp.streamUrl + this.clientConst);
        const player = document.getElementById('audio-player') as HTMLAudioElement;
        player.pause();
        player.load();
        player.play();
      }
    });
  }

}
