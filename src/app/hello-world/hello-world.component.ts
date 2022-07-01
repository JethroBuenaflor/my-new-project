import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee/employee.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  message = 'Hello World';
  color = 'red';
  isBig = true;
  isDisplayed = true;
  alertMessage = 'BOOOOOOMMM!!!';
  content = '';
  mySize = 'size-100'

  name = '';
  gender = '';
  title = '';
  tenure = 0;
  salary = 0;
  employees:any = [];
  isVisible = true;
  bgcolor = true;

  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  switchSize(size: string) {
    this.mySize = size
    this.isBig != this.isBig
  }

  switchDisplay() {
    this.isDisplayed = !this.isDisplayed;
  }

  displayAlert(message: string) {
    alert(message);
  }

  clearEmployeeInputs() {
    this.name = '';
    this.title = '';
    this.gender = '';
    this.tenure = 0;
    this.salary = 0;
  }

  fetchEmployees() {
    this.employees = this.employeeService.getEmployees();
  }
  
  addEmployee(name: string, title: string, gender: string, tenure: number, salary: number, isVisible: boolean) {
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      isVisible: isVisible
    };

    this.employeeService.addEmployees(employee);

    this.clearEmployeeInputs();
  }

  updateEmployee(index: number, name: string, title: string, gender: string, tenure: number, salary: number, isVisible: boolean, bgcolor: boolean) {
    const employee = {
      name: name,
      gender: gender,
      title: title,
      tenure: tenure,
      salary: salary,
      isVisible: isVisible,
      bgcolor: bgcolor
    };

    this.employeeService.updateEmployees(index, employee)
    this.clearEmployeeInputs();
  }

  deleteEmployee(index: number) {
    this.employeeService.deleteEmployees(index);
    alert(this.alertMessage)
  }

}
