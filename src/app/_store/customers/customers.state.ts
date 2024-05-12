import { customerStateModel } from '../../../_model/customerStateModel';

export const initialCustomerState: customerStateModel = {
  list: [],
  errorMessage: '',
  customerToEdit: {
    createdAt: '',
    updatedAt: '',
    createdById: 0,
    updatedById: 0,
    id: 0,
    code: '',
    name: '',
    email: '',
    phone: '',
  },
};
