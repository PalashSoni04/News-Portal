import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { DataManagerService } from '../data-manager-service/data-manager.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class NewsService {
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

    getNewsList() {
        return this.httpClient.get(`${this.baseurl}/News/`).pipe(retry(1), catchError(this.handleError));
    }

    createNewNews(newNews) {
        return this.httpClient.post(`${this.baseurl}/News`, newNews).pipe(retry(1), catchError(this.handleError));
    }

    deleteNews(newsId) {
        return this.httpClient.delete(`${this.baseurl}/News/${newsId}`).pipe(retry(1), catchError(this.handleError));
    }

    updateStatus(newsId, status) {
        return this.httpClient.put(`${this.baseurl}/News/${newsId}/${status}`, '').pipe(retry(1), catchError(this.handleError));
    }
}
