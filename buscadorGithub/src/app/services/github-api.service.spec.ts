/* tslint:disable:no-unused-variable */
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject,  } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { GithubApiService } from './github-api.service';

describe('Service: GithubApi', () => {
  let service: GithubApiService;
  let dialogSpy: MatDialog;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GithubApiService,
        { provide: MatDialog, useValue: dialogSpy }
      ],
    });

    service = TestBed.get(GithubApiService);
  });

  it('should ...', inject([GithubApiService], (s: GithubApiService) => {
    expect(s).toBeTruthy();
  }));

  it('should find user details', () => {
    const username = 'tsmurer';
    expect(service.getUserDetails(username)).toBeTruthy();
  });

  it('should find user repositories', () => {
    const username = 'tsmurer';
    expect(service.getUserRepos(username)).toBeTruthy();
  });
});
