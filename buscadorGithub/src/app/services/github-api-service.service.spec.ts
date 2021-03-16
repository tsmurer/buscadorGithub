/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { GithubApiServiceService } from './github-api-service.service';

describe('Service: GithubApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        GithubApiServiceService,
      ]
    });
  });

  it('should ...', inject([GithubApiServiceService], (service: GithubApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
