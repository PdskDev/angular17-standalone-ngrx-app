export interface Customer {
  id: number;
  code: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
  createdById: number;
  updatedById: number;
}

export interface CustomerRequest {
  code: string;
  name: string;
  email: string;
  phone: string;
}
