/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from './error-handler.service';

describe('Service: ErrorHandler', () => {

  const dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
  let service: ErrorHandlerService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        ErrorHandlerService,
        { provide: MatDialog, useValue: dialogSpy }
      ]
    });
    service = TestBed.get(ErrorHandlerService);
  });

  it('should ...', inject([ErrorHandlerService], (s: ErrorHandlerService) => {
    expect(s).toBeTruthy();
  }));

  it('should handle errors', () => {
    const spy = spyOn(service, 'notFoundDialog');
    const error = new Error();
    service.handleError(error);
    expect(spy).toHaveBeenCalled();
  });

  it('should open dialog', () => {
    service.notFoundDialog();
    expect(dialogSpy.open).toHaveBeenCalled();
  });

});
