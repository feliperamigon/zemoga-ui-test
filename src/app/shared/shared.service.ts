import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class SharedService {

    private jsonUrl = 'assets/response.json';

    constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

    public getData(): Observable<any> {
        return this.http.get(this.jsonUrl);
    }

    public showSnackbar(message: string) {
        this.snackBar.open(message, 'Dismiss', {duration: 5000});
    }
}
