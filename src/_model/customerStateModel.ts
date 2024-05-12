import { Customer } from './customer';
import { CustomerRequest } from './customerRequest';
import { CustomerResponse } from './customerResponse';

export interface customerStateModel {
  list: Customer[];
  errorMessage: string;
  customerToEdit: CustomerResponse['data'];
}
