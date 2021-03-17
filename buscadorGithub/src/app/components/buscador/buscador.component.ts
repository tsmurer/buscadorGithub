import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  value: string;
  userInfo: object;
  reposInfo: object;


  constructor(
    private githubApiService: GithubApiService,
    private router: Router
    ) { }

  ngOnInit() {}

  buscar(username) {

    // requisiçao endpoint de user info
    if (username) {
      this.githubApiService.getUserDetails(username).subscribe(
        (respUserDetails) => {
          this.userInfo = respUserDetails;

          // requisiçao endpoint de user repos
          this.githubApiService.getUserRepos(username).subscribe(
            (respUserRepos) => {
              this.reposInfo = respUserRepos;

              console.log(this.userInfo);
              console.log(this.reposInfo);
              this.router.navigate(['results', this.value], { state: { user: this.userInfo, repos: this.reposInfo} });
            }
          );
        }
      );

    }
  }

}
