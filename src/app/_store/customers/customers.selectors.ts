import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customerStateModel } from '../../../_model/customerStateModel';
import { Customer } from '../../../_model/customer';

const getCustomerStore = createFeatureSelector<customerStateModel>('customers');

export const getCustomerList = (state: customerStateModel): Customer[] =>
  state.list;

export const getCustomersList = createSelector(
  getCustomerStore,
  getCustomerList
);
