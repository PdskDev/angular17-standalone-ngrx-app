import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../../_model/post';
import { Customer } from '../../_model/customer';
import { Observable, of, tap } from 'rxjs';
import { ListeOfCustomers } from '../../_model/listeOfCustomer';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  demoList = {
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
  };

  // getAll() {
  //   return this.http.get<Post[]>('/api/posts');
  // }

  // getApiBooksAll() {
  //   const apiURL = '/api/mj0418ey9l444mj/records';
  //   return this.http.get<Post[]>(apiURL);
  // }

  getApiCustomersAll(): Observable<ListeOfCustomers> {
    const url = '/bff/api/customers:list';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<ListeOfCustomers>(url, { headers });

    //return of(this.demoList);
  }
}
