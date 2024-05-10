import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../_service/master.service';
import {
  addCustomer,
  addCustomerSuccess,
  deleteCustomer,
  deleteCustomerSuccess,
  loadCustomer,
  loadCustomerFail,
  loadCustomerSuccess,
  updateCustomer,
  updateCustomerSuccess,
} from './customers.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class CustomerEffects {
  constructor(
    private readonly actions$: Actions,
    private masterService: MasterService
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
      exhaustMap((action) => {
        return this.masterService.createNewCustomer(action.customerData).pipe(
          map((newCustomerAdded) => {
            return addCustomerSuccess();
          }),
          catchError((_error) =>
            of(loadCustomerFail({ errorMessage: _error.message }))
          )
        );
      })
    )
  );

  _updateCustomer = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCustomer),
      exhaustMap((action) => {
        return this.masterService.createNewCustomer(action.customerData).pipe(
          map((customerUpdated) => {
            return updateCustomerSuccess();
          }),
          catchError((_error) =>
            of(loadCustomerFail({ errorMessage: _error.message }))
          )
        );
      })
    )
  );

  _deleteCustomer = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCustomer),
      exhaustMap((action) => {
        return this.masterService.deleteCustomer(action.id).pipe(
          map((customerDeleted) => {
            return deleteCustomerSuccess();
          }),
          catchError((_error) =>
            of(loadCustomerFail({ errorMessage: _error.message }))
          )
        );
      })
    )
  );
}
