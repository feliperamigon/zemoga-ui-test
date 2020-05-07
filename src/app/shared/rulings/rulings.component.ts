import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
    selector: 'app-rulings',
    templateUrl: './rulings.component.html',
    styleUrls: ['./rulings.component.scss']
})
export class RulingsComponent implements OnInit {

    public characters: any;

    constructor(private sharedService: SharedService) {
        this.sharedService.getData().subscribe((data: any) => {
            if (!localStorage.data) {
                this.characters = data.characters;
                localStorage.setItem('data', JSON.stringify(this.characters));
            } else {
                const dataRetrieved = localStorage.getItem('data');
                this.characters = JSON.parse(dataRetrieved);
            }
        });
    }

    ngOnInit() {
    }

}
