import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.sass'],
})
export class HowItWorksComponent implements OnInit {
  constructor(private sharedService: SharedService) {
    this.sharedService.setTitle('How it works - UI Test');
  }

  ngOnInit(): void {}
}
