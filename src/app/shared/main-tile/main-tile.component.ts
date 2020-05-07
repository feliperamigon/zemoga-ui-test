import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main-tile',
  templateUrl: './main-tile.component.html',
  styleUrls: ['./main-tile.component.scss']
})
export class MainTileComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  vote() {
    this.sharedService.showSnackbar('Thanks for voting!');
  }

}
