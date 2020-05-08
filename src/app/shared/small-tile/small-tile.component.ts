import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-small-tile',
  templateUrl: './small-tile.component.html',
  styleUrls: ['./small-tile.component.scss'],
})
export class SmallTileComponent implements OnInit {
  /**
   * Input char<any>: Character information
   * charUrl<string> : Background image URL with some dynamic styles within
   * selectedVote<boolean>: Either Up/Down vote selected
   * upPercentage<string>: Up votes percentage
   * downPercentage<string>: Down votes percentage
   */
  @Input() char: any;
  private charUrl: any;
  private selectedVote = null;
  private showVoteBox = true;
  private upPercentage: string;
  private downPercentage: string;

  constructor(
    private sanitizer: DomSanitizer,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.charUrl = this.sanitizer.bypassSecurityTrustStyle(
      'linear-gradient(0deg, #00000070, transparent),' +
        'url(' +
        this.char.images.url +
        ')' +
        'no-repeat'
    );
    this.calculateVotes();
  }

  /**
   * @desc Calculates the amount of votes and set each percentage bar
   * @returns void
   */
  calculateVotes(): void {
    const totalVotes = this.char.votesUpCount + this.char.votesDownCount;
    this.upPercentage = `${Math.round(
      (this.char.votesUpCount / totalVotes) * 100
    )}%`;
    this.downPercentage = `${Math.round(
      (this.char.votesDownCount / totalVotes) * 100
    )}%`;
  }

  /**
   * @desc Retrieve data from localstorage and sets the new one based on the vote action
   * @returns void
   */
  vote(): void {
    const localData = JSON.parse(localStorage.getItem('data'));
    const currentChar = localData.find((el) => el.id === this.char.id);
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
    this.sharedService.showSnackbar('Total votes: ' + this.char.totalVotes);
    this.showVoteBox = false;
  }
}
