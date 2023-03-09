import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../../dtos/CreateCustomer.dto';
import { Customer } from '../../types/Customer';

@Injectable()
export class CustomersService {
  private customer: Customer[] = [
    {
      id: 1,
      email: 'johna@gmail.com',
      name: 'johna',
    },
    {
      id: 2,
      email: 'johnb@gmail.com',
      name: 'johnb',
    },
    {
      id: 3,
      email: 'johnc@gmail.com',
      name: 'johnc',
    },
  ];

  findCustomerById(id: number) {
    return this.customer.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customer.push(customerDto);
  }

  getCustomers() {
    return this.customer;
  }
}
