import { createAction, props } from '@ngrx/store';
import { Customer } from '../../../_model/customer';

export const LOAD_CUSTOMER = '[Customer] load customer';
export const LOAD_CUSTOMER_SUCCESS = '[Customer] load customer success';
export const LOAD_CUSTOMER_FAIL = '[Customer] load customer failed';

export const loadCustomer = createAction(LOAD_CUSTOMER);
export const loadCustomerSuccess = createAction(
  LOAD_CUSTOMER_SUCCESS,
  props<{ list: Customer[] }>()
);
export const loadCustomerFail = createAction(
  LOAD_CUSTOMER_FAIL,
  props<{ errorMessage: string }>()
);
