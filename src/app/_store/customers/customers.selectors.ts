import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customerStateModel } from '../../../_model/customerStateModel';
import { Customer } from '../../../_model/customer';
import { CustomerRequest } from '../../../_model/customerRequest';

export const CustomerStore =
  createFeatureSelector<customerStateModel>('customers');

export const getCustomersList = (state: customerStateModel): Customer[] =>
  state.list;

export const getCustomer = (state: customerStateModel): CustomerRequest =>
  state.customerToEdit;

export const selectCustomersList = createSelector(
  CustomerStore,
  getCustomersList
);

export const selectCustomerToEdit = createSelector(CustomerStore, getCustomer);
