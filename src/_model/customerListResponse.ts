import { Customer } from './customer';

export interface CustomerListResponse {
  data: Customer[];
  meta: {
    count: number;
    page: number;
    pageSize: number;
    totalPage: number;
  };
}
