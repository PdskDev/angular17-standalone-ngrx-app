import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customerStateModel } from '../../../_model/customerStateModel';
import { Customer } from '../../../_model/customer';

export const CustomerStore =
  createFeatureSelector<customerStateModel>('customers');

export const getCustomersList = (state: customerStateModel): Customer[] =>
  state.list;

export const selectCustomersList = createSelector(
  CustomerStore,
  getCustomersList
);
