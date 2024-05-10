import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../_service/master.service';
import { Post } from '../../../_model/post';
import { Customer } from '../../../_model/customer';
import { map, switchMap } from 'rxjs';
import { CustomerListResponse } from '../../../_model/customerListResponse';
import { AppMaterialModule } from '../../../_module/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadCustomer } from '../../_store/customers/customers.actions';
import { selectCustomersList } from '../../_store/customers/customers.selectors';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [AppMaterialModule, CommonModule],
  providers: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css',
})
export class CustomerComponent implements OnInit {
  listPosts!: Post[];
  listCustomers!: Customer[];
  customersDataSource: any;
  customerDisplayColumn: string[] = ['code', 'name', 'email', 'phone'];

  //constructor(private masterService: MasterService) {}
  constructor(private readonly customerStore: Store) {}
  ngOnInit(): void {
    //this.loadInitialPostsData();
    this.loadInitialCustomersData();
  }

  loadInitialCustomersData() {
    /* this.masterService.getApiCustomersAll().subscribe({
      next: (list: CustomerListResponse) => {
        this.listCustomers = list.data;
        this.customersDataSource = new MatTableDataSource(this.listCustomers);
      },
      error: (error) => {
        console.error(error);
      },
    }); */

    //Call Customer Store
    this.customerStore.dispatch(loadCustomer());
    this.customerStore
      .select(selectCustomersList)
      .subscribe((listeOfCustomers) => {
        this.listCustomers = listeOfCustomers;
        this.customersDataSource = new MatTableDataSource(this.listCustomers);
      });
  }
}
