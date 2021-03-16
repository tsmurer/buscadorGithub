import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  value = '';

  constructor(private githubApiService: GithubApiService) { }

  ngOnInit() {
    
  }

  buscar() {
  }

}
