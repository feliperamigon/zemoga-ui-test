import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-trials',
  templateUrl: './trials.component.html',
  styleUrls: ['./trials.component.sass'],
})
export class TrialsComponent implements OnInit {
  constructor(private sharedService: SharedService) {
    this.sharedService.setTitle('Past trials - UI Test');
  }

  ngOnInit(): void {}
}
