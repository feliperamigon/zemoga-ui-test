import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private sharedService: SharedService) {
    this.sharedService.setTitle('Login - UI Test');
  }

  ngOnInit(): void {}
}
