/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';

import { BuscadorComponent } from './buscador.component';
import { FormsModule } from '@angular/forms';
import { GithubApiService } from 'src/app/services/github-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

describe('BuscadorComponent', () => {
  let component: BuscadorComponent;
  let fixture: ComponentFixture<BuscadorComponent>;
  let dialogSpy: MatDialog;
  let service: GithubApiService;

  beforeEach(async(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    TestBed.configureTestingModule({
      declarations: [ BuscadorComponent ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ],
      providers: [
        GithubApiService,
        { provide: MatDialog, useValue: dialogSpy }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(GithubApiService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
