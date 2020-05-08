import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Title } from '@angular/platform-browser';

@Injectable()
export class SharedService {
  private jsonUrl = 'assets/response.json';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private titleService: Title
  ) {}

  /**
   * @desc Retrieve data from Local JSON
   * @returns Observable<any>
   */
  public getData(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }

  /**
   * @desc Display a snackbar with a message during 5 seconds
   * @param message string Message to be displayed
   */
  public showSnackbar(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 5000 });
  }

  /**
   * @desc Sets document title
   */
  public setTitle(title: string): void {
    this.titleService.setTitle(title);
  }
}
