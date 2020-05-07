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
  private selectedVote = null;
  private showVoteBox = true;
  private upPercentage: string;
  private downPercentage: string;

  constructor(private sanitizer: DomSanitizer, private sharedService: SharedService) { }

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

  vote(): void {
    const localData = JSON.parse(localStorage.getItem('data'));
    const currentChar = localData.find(el => el.id === this.char.id);
    if (this.selectedVote) {
      this.char.votesUpCount++;
    } else {
      this.char.votesDownCount++;
    }
    this.char.totalVotes++;
    currentChar.totalVotes++;
    localData[this.char.id] = this.char;
    localStorage.setItem('data', JSON.stringify(localData));
    this.calculateVotes();
    this.sharedService.showSnackbar('Total votes: ' + (this.char.totalVotes));
    this.showVoteBox = false;
  }

}
