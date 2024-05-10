import { Customer } from './customer';

export interface customerStateModel {
  list: Customer[];
  errorMessage: string;
}
