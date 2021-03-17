import { Injectable } from '@angular/core';
import { take, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class GithubApiService {

baseUrl = 'https://api.github.com/users/';

constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
    ) {
}

getUserDetails(username: string) {
    return this.http.get(this.baseUrl + username).pipe(
        take(1),
        catchError(error => {
          return this.errorHandler.handleError(error);
        })
      );
}

getUserRepos(username: string) {
    return this.http.get(this.baseUrl + username + '/repos');
}

}
