import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class GithubApiService {

baseUrl = 'https://api.github.com/users/';

constructor(private http: HttpClient) {
}

getUserDetails(username: string) {
    return this.http.get(this.baseUrl + username);
}

getUserRepos(username: string) {
    return this.http.get(this.baseUrl + username + '/repos');
}

}
