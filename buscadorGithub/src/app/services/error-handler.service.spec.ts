/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlerService } from './error-handler.service';

describe('Service: ErrorHandler', () => {

  let dialogSpy: MatDialog;
  let service: ErrorHandlerService;

  beforeEach(() => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    TestBed.configureTestingModule({
      providers: [
        ErrorHandlerService,
        { provide: MatDialog, useValue: dialogSpy }
      ]
    });
    service = TestBed.get(ErrorHandlerService);
    
  });

  it('should ...', inject([ErrorHandlerService], (service: ErrorHandlerService) => {
    expect(service).toBeTruthy();
  }));

  //handleError

  it('should handle errors', () => {
    let error: any;
    service.handleError(error);
    expect(service).toThrowError;
  });
  //notFoundDialog

  it('should open dialog', () => {
    service.notFoundDialog();
    expect(dialogSpy.open).toHaveBeenCalled();
  });

});
