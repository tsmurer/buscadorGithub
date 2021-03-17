import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {


  user: object;
  repos: object;
  constructor(private router: Router) {
    const data = this.router.getCurrentNavigation().extras.state;
    this.user = data.user;
    this.repos = data.repos.sort( (a, b) => {
      return b.stargazers_count - a.stargazers_count;
    });
   }

  ngOnInit() {

  }

  handleDatetime(d: string) {
    const dateTime = d.split('T');
    const date = dateTime[0].split('-').reverse();
    const time = dateTime[1].slice(0, -1);
    return time + ' ' + date.join('/') ;
  }

}
