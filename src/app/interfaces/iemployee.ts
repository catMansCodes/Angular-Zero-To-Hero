export interface IEmployee {
  employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfJoining: string; // ISO date string
  employeeType: string;
  salary: number;
  departmentName: string;
  designationName: string;
}

export class Employee {
  employeeId: number;
  fullName: string;
  email: string;
  phone: string;
  gender: String;
  dateOfJoining: string;
  employeeType: string;
  salary: number;
  departmentId: number;
  designationId: number;

  constructor() {
    this.fullName = '';
    this.employeeId = 0;
    this.email = '';
    this.phone = '';
    this.gender = '';
    this.dateOfJoining = '';
    this.employeeType = '';
    this.salary = 0;
    this.departmentId = 0;
    this.designationId = 0;
  }
}
