import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DataManagerService } from '../data-manager-service/data-manager.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    baseurl: String = null;

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    }

    constructor(private dataManager: DataManagerService, private httpClient: HttpClient) {
        this.baseurl = dataManager.getServerHostname();
    }

    getuserlist() {
        return this.httpClient.get(`${this.baseurl}/Users/`).pipe(retry(1), catchError(this.handleError));
    }

    deleteUser(userId) {
        return this.httpClient.delete(`${this.baseurl}/User/${userId}`).pipe(retry(1), catchError(this.handleError));
    }

    createNewUser(newUser) {
        return this.httpClient.post(`${this.baseurl}/User`, newUser).pipe(retry(1), catchError(this.handleError));
    }

    updateStatus(userId, status) {
        return this.httpClient.put(`${this.baseurl}/User/${userId}/${status}`, '').pipe(retry(1), catchError(this.handleError));
    }
}
