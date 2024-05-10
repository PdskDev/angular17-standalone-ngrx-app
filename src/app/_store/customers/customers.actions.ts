import { createAction, props } from '@ngrx/store';
import { Customer, CustomerRequest } from '../../../_model/customer';

export const LOAD_CUSTOMER = '[Customer] load customer';
export const LOAD_CUSTOMER_SUCCESS = '[Customer] load customer success';
export const LOAD_CUSTOMER_FAIL = '[Customer] load customer failed';

export const ADD_CUSTOMER = '[Customer] add customer';
export const ADD_CUSTOMER_SUCCESS = '[Customer] add customer success';
//export const ADD_CUSTOMER_FAIL = '[Customer] add customer failed';

export const UPDATE_CUSTOMER = '[Customer] update customer';
export const UPDATE_CUSTOMER_SUCCESS = '[Customer] update customer success';
//export const UPDATE_CUSTOMER_FAIL = '[Customer] update customer failed';

export const DELETE_CUSTOMER = '[Customer] delete customer';
export const DELETE_CUSTOMER_SUCCESS = '[Customer] delete customer success';
//export const DELETE_CUSTOMER_FAIL = '[Customer] delete customer failed';

export const SHOW_ALERT = '[Customer] show alert';

export const loadCustomer = createAction(LOAD_CUSTOMER);
export const loadCustomerSuccess = createAction(
  LOAD_CUSTOMER_SUCCESS,
  props<{ list: Customer[] }>()
);
export const loadCustomerFail = createAction(
  LOAD_CUSTOMER_FAIL,
  props<{ errorMessage: string }>()
);

export const addCustomer = createAction(
  ADD_CUSTOMER,
  props<{ customerData: CustomerRequest }>()
);
export const addCustomerSuccess = createAction(ADD_CUSTOMER_SUCCESS);

export const updateCustomer = createAction(
  UPDATE_CUSTOMER,
  props<{ customerData: CustomerRequest }>()
);
export const updateCustomerSuccess = createAction(UPDATE_CUSTOMER_SUCCESS);

export const deleteCustomer = createAction(
  DELETE_CUSTOMER,
  props<{ id: number }>()
);
export const deleteCustomerSuccess = createAction(DELETE_CUSTOMER_SUCCESS);

export const showAlert = createAction(
  SHOW_ALERT,
  props<{ message: string; messageType: string }>()
);

export const emptyAction = createAction('emptyAction');
