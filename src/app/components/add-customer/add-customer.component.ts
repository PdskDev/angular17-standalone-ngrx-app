import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../_module/material.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerRequest } from '../../../_model/customer';

@Component({
  selector: 'app-add-customer',
  standalone: true,
  imports: [AppMaterialModule, CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './add-customer.component.html',
  styleUrl: './add-customer.component.css',
})
export class AddCustomerComponent {
  constructor(private fb: FormBuilder) {}

  customerForm = this.fb.group({
    code: this.fb.control('', Validators.required),
    name: this.fb.control('', Validators.required),
    email: this.fb.control('', [Validators.required, Validators.email]),
    phone: this.fb.control('', Validators.required),
  });

  saveCustomer() {
    if (this.customerForm.valid) {
      const newCustomer: CustomerRequest = {
        code: this.customerForm.value.code as string,
        name: this.customerForm.value.name as string,
        email: this.customerForm.value.email as string,
        phone: this.customerForm.value.phone as string,
      };
    }
  }
}
