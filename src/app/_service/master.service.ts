import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerListResponse } from '../../_model/customerListResponse';
import { Customer } from '../../_model/customer';
import { CustomerDeletedResponse } from '../../_model/customerDeletedResponse';
import { CustomerResponse } from '../../_model/customerResponse';
import { CustomerRequest } from '../../_model/customerRequest';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getCustomersAll(): Observable<CustomerListResponse> {
    const url = '/bff/api/customers:list';

    return this.http.get<CustomerListResponse>(url, { headers: this.headers });
  }

  getCustomerById(id: number): Observable<CustomerResponse> {
    const url = `/bff/api/customers:get?filterByTk=${id}`;

    return this.http.get<CustomerResponse>(url, { headers: this.headers });
  }

  createNewCustomer(newCustomer: CustomerRequest): Observable<Customer> {
    const url = '/bff/api/customers:create';

    return this.http.post<Customer>(url, newCustomer, {
      headers: this.headers,
    });
  }

  updateCustomer(
    id: number,
    customerToUpdate: CustomerRequest
  ): Observable<Customer> {
    const url = `/bff/api/customers:update?filterByTk=${id}`;

    return this.http.post<Customer>(url, customerToUpdate, {
      headers: this.headers,
    });
  }

  deleteCustomer(id: number): Observable<CustomerDeletedResponse> {
    const url = `/bff/api/customers:destroy?filterByTk=${id}`;

    return this.http.post<CustomerDeletedResponse>(url, {
      headers: this.headers,
    });
  }

  hasAccessDummy() {
    return true;
  }
}
