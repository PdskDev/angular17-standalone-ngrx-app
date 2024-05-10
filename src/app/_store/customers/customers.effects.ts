import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MasterService } from '../../_service/master.service';
import {
  loadCustomer,
  loadCustomerFail,
  loadCustomerSuccess,
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
}
