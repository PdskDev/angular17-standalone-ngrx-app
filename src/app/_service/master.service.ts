import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerListResponse } from '../../_model/customerListResponse';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  /* demoList = {
    list: [
      {
        createdAt: '2024-05-09T20:24:09.940Z',
        updatedAt: '2024-05-09T20:24:09.940Z',
        createdById: 1,
        updatedById: 1,
        id: 1,
        code: 'cust01',
        name: 'Steve Job',
        email: 'steve@job.apple',
        phone: '0102030405',
      },
      {
        createdAt: '2024-05-09T20:24:47.991Z',
        updatedAt: '2024-05-09T20:24:47.991Z',
        createdById: 1,
        updatedById: 1,
        id: 2,
        code: 'cust02',
        name: 'Bill Gate',
        email: 'bill@gate.microsoft',
        phone: '0607080910',
      },
      {
        createdAt: '2024-05-09T20:25:51.550Z',
        updatedAt: '2024-05-09T20:25:51.550Z',
        createdById: 1,
        updatedById: 1,
        id: 3,
        code: 'cust02',
        name: 'Larry Page',
        email: 'larry@page.google',
        phone: '0708090405',
      },
    ],
    meta: {
      count: 3,
      page: 1,
      pageSize: 20,
      totalPage: 1,
    },
  }; */

  getApiCustomersAll(): Observable<CustomerListResponse> {
    const url = '/bff/api/customers:list';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<CustomerListResponse>(url, { headers });

    //return of(this.demoList);
  }

  hasAccessDummy() {
    return true;
  }
}
