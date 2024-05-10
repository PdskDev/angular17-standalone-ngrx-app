import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomerListResponse } from '../../_model/customerListResponse';
import { Customer, CustomerRequest } from '../../_model/customer';
import { CustomeDeletedResponse } from '../../_model/customerDeletedResponse';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  getApiCustomersAll(): Observable<CustomerListResponse> {
    const url = '/bff/api/customers:list';

    return this.http.get<CustomerListResponse>(url, { headers: this.headers });
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

  deleteCustomer(id: number): Observable<CustomeDeletedResponse> {
    const url = `/bff/api/customers:destroy?filterByTk=${id}`;

    return this.http.post<CustomeDeletedResponse>(url, {
      headers: this.headers,
    });
  }

  hasAccessDummy() {
    return true;
  }
}
