import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { throwError } from 'rxjs';
import { NotFoundDialogComponent } from '../components/not-found-dialog/not-found-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

constructor(
  private dialog: MatDialog
) { }

handleError(error) {
  this.notFoundDialog();
  return throwError(error);
}

notFoundDialog() {
  this.dialog.open(NotFoundDialogComponent, {
    width: '250px'
  });
}

}
