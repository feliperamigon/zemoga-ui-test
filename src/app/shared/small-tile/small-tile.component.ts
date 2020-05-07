import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-small-tile',
  templateUrl: './small-tile.component.html',
  styleUrls: ['./small-tile.component.scss']
})
export class SmallTileComponent implements OnInit {

  // @Input char<any>: Character information
  @Input() char: any;
  private charUrl: any;
  private upPercentage: string;
  private downPercentage: string;

  constructor(private sanitizer: DomSanitizer, private sharedService: SharedService ) { }

  ngOnInit() {
    this.charUrl = this.sanitizer.bypassSecurityTrustStyle('linear-gradient(0deg, #00000070, transparent),'
      + 'url(' + this.char.images.url + ')' + 'no-repeat');
    this.calculateVotes();
  }

  calculateVotes(): void {
    const totalVotes = this.char.votesUpCount + this.char.votesDownCount;
    this.upPercentage = `${Math.round((this.char.votesUpCount / totalVotes) * 100)}%`;
    this.downPercentage = `${Math.round((this.char.votesDownCount / totalVotes) * 100)}%`;
  }

  vote(vote: number): void {
    if (vote === 1) {
      this.char.votesUpCount++;
    } else if (vote === -1) {
      this.char.votesDownCount++;
    }
    this.calculateVotes();
    this.sharedService.showSnackbar('Thanks for voting!');
  }

}
