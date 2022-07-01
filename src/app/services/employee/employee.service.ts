import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees:any = [
    {
      'name': 'Jethro',
      'title': 'SDET',
      'gender': 'M',
      'tenure': 0,
      'salary': 100000,
      'isVisible': true,
      'bgcolor': true
    }
  ];
  
  constructor() { }

  getEmployees() {
    return this.employees
  }

  addEmployees(employee:any) {
    this.employees.push(employee);
  }

  deleteEmployees(index:number) {
    this.employees.splice(index, 1);
  }

  updateEmployees(index:number, employee:any) {
    this.employees[index] = employee;
  }

}
