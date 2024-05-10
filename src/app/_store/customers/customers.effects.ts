import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../_service/master.service';
import {
  addCustomer,
  addCustomerSuccess,
  deleteCustomer,
  deleteCustomerSuccess,
  emptyAction,
  loadCustomer,
  loadCustomerFail,
  loadCustomerSuccess,
  showAlert,
  updateCustomer,
  updateCustomerSuccess,
} from './customers.actions';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomerEffects {
  constructor(
    private readonly actions$: Actions,
    private masterService: MasterService,
    private _snakeBar: MatSnackBar
  ) {}

  _loadCustomers = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCustomer),
      exhaustMap((action) => {
        return this.masterService.getApiCustomersAll().pipe(
          map((customerListResponse) => {
            return loadCustomerSuccess({ list: customerListResponse.data });
          }),
          catchError((_error) =>
            of(loadCustomerFail({ errorMessage: _error.message }))
          )
        );
      })
    )
  );

  _addCustomer = createEffect(() =>
    this.actions$.pipe(
      ofType(addCustomer),
      switchMap((action) => {
        return this.masterService.createNewCustomer(action.customerData).pipe(
          switchMap(() => {
            return of(
              addCustomerSuccess(),
              showAlert({
                message: 'New Customer added successfully!',
                messageType: 'pass',
              })
            );
          }),
          catchError((_error) =>
            of(
              loadCustomerFail({ errorMessage: _error.message }),
              showAlert({
                message: 'Failed to add New Customer!',
                messageType: 'fail',
              })
            )
          )
        );
      })
    )
  );

  _updateCustomer = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCustomer),
      switchMap((action) => {
        return this.masterService.createNewCustomer(action.customerData).pipe(
          switchMap(() => {
            return of(
              updateCustomerSuccess(),
              showAlert({
                message: 'Customer updated successfully!',
                messageType: 'pass',
              })
            );
          }),
          catchError((_error) =>
            of(
              loadCustomerFail({ errorMessage: _error.message }),
              showAlert({
                message: 'Fail to update a Customer!',
                messageType: 'fail',
              })
            )
          )
        );
      })
    )
  );

  _deleteCustomer = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCustomer),
      switchMap((action) => {
        return this.masterService.deleteCustomer(action.id).pipe(
          switchMap(() => {
            return of(
              deleteCustomerSuccess(),
              showAlert({
                message: 'Customer deleted successfully!',
                messageType: 'pass',
              })
            );
          }),
          catchError((_error) =>
            of(
              loadCustomerFail({ errorMessage: _error.message }),
              showAlert({
                message: 'Failed to delete a Customer!',
                messageType: 'fail',
              })
            )
          )
        );
      })
    )
  );

  _showAlert = createEffect(() => {
    return this.actions$.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        return this.showSnackBar(action.message, action.messageType)
          .afterDismissed()
          .pipe(
            map(() => {
              return emptyAction();
            })
          );
      })
    );
  });

  showSnackBar(message: string, type: string = 'fail') {
    let _class = type === 'pass' ? 'text-green' : 'text-red';

    return this._snakeBar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 5000,
      panelClass: [_class],
    });
  }
}
