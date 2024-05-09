import { Customer } from './customer';

export interface ListeOfCustomers {
  data: Customer[];
  meta: {
    count: number;
    page: number;
    pageSize: number;
    totalPage: number;
  };
}
