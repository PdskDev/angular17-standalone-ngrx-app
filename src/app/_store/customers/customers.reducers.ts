import { createReducer, on } from '@ngrx/store';
import { initialCustomerState } from './customers.state';
import {
  deleteCustomerSuccess,
  loadCustomerFail,
  loadCustomerSuccess,
} from './customers.actions';

const _CustomerReducer = createReducer(
  initialCustomerState,
  on(loadCustomerSuccess, (state, action) => {
    return {
      ...state,
      list: action.list,
      errorMessage: '',
    };
  }),
  on(loadCustomerFail, (state, action) => {
    return {
      ...state,
      list: [],
      errorMessage: action.errorMessage,
    };
  }),
  on(deleteCustomerSuccess, (state, action) => {
    let _customersList = state.list.filter((c) => c.id !== action.id);
    return {
      ...state,
      list: _customersList,
      errorMessage: '',
    };
  })
);

export function CustomerReducer(state: any, action: any) {
  return _CustomerReducer(state, action);
}
