import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../../_module/material.module';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addCustomer,
  loadCustomerToEdit,
  updateCustomer,
} from '../../_store/customers/customers.actions';
import { CustomerRequest } from '../../../_model/customerRequest';
import { selectCustomerToEdit } from '../../_store/customers/customers.selectors';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [AppMaterialModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent implements OnInit {
  editCustomerId: string = '';
  pageTitle: string = 'Add New Customer';
  //isCodeFieldDisable: boolean = false;

  constructor(
    private fb: FormBuilder,
    private readonly customerStore: Store,
    private activedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.editCustomerId = this.activedRoute.snapshot.paramMap.get(
      'id'
    ) as string;

    if (this.editCustomerId != null && this.editCustomerId != '') {
      this.pageTitle = 'Edit Customer';
      //this.isCodeFieldDisable = true;
      this.customerForm.controls.code.disable();
      this.customerStore.dispatch(
        loadCustomerToEdit({ id: Number.parseInt(this.editCustomerId) })
      );
      this.customerStore
        .select(selectCustomerToEdit)
        .subscribe((customerOnEdit) => {
          this.customerForm.setValue({
            code: customerOnEdit.code,
            name: customerOnEdit.name,
            email: customerOnEdit.email,
            phone: customerOnEdit.phone,
          });
        });
    }
  }

  customerForm = this.fb.group({
    code: this.fb.control('', Validators.required),
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    phone: this.fb.control('', Validators.required),
  });

  saveCustomer() {
    if (this.customerForm.valid) {
      const customerData: CustomerRequest = {
        code: this.customerForm.getRawValue().code as string,
        name: this.customerForm.value.name as string,
        email: this.customerForm.value.email as string,
        phone: this.customerForm.value.phone as string,
      };

      if (this.editCustomerId != null && this.editCustomerId != '') {
        // customerData.code = this.editCustomerId;

        this.customerStore.dispatch(
          updateCustomer({
            id: Number.parseInt(this.editCustomerId),
            customerData: customerData,
          })
        );
      } else {
        this.customerStore.dispatch(
          addCustomer({ customerData: customerData })
        );
      }
    }
  }
}
