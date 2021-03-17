import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let fixture: ComponentFixture<ResultsComponent>;
  let component: ResultsComponent;

  class RouterStub {
    getCurrentNavigation() {
      return {
         extras: {
            state: {
              user: {},
              repos: [
                {
                  created_at: '2018-10-16T14:40:17Z',
                  pushed_at: '2018-10-16T14:40:17Z',
                  stargazers_count: 0,
                  language: 'Java'
                },
            ]
            }
          }
        };
      }
   }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle dateTime format', () => {
    const dateTime = '2018-11-19T17:41:28Z';
    const newFormat = component.handleDatetime(dateTime);
    expect(newFormat).toBe('17:41:28 19/11/2018');
  });
});
