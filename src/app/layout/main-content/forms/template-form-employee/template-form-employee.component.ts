import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Employee, IEmployee } from '../../../../interfaces/iemployee';
import { PageTitleComponent } from '../../../page-title/page-title.component';

interface Department {
  departmentId: number;
  departmentName: string;
}

interface Designation {
  designationId: number;
  designationName: string;
}

@Component({
  selector: 'app-template-form-employee',
  imports: [PageTitleComponent, RouterLink, FormsModule],
  templateUrl: './template-form-employee.component.html',
})
export class TemplateFormEmployeeComponent implements OnInit {
  private readonly http = inject(HttpClient);

  heading = 'Template Form Employee Demo';
  subHeading =
    'Build a working employee form quickly with ngModel and two-way binding.';

  employeeList: IEmployee[] = [];
  readonly appURL = 'https://api.freeprojectapi.com/api/EmployeeApp';

  employee: Employee = new Employee();
  departmentList: Department[] = [];
  designationList: Designation[] = [];
  isSaving = false;

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllDepartments();
  }

  getAllEmployee(): void {
    this.http
      .get<IEmployee[]>(this.appURL + '/GetEmployees')
      .subscribe((employees) => (this.employeeList = employees ?? []));
  }

  getAllDepartments(): void {
    this.http
      .get<Department[]>(this.appURL + '/GetDepartments')
      .subscribe((departments) => (this.departmentList = departments ?? []));
  }

  onDepartmentChange(): void {
    const deptId = Number(this.employee.departmentId ?? 0);
    this.employee.designationId = 0;
    this.designationList = [];

    if (!deptId) {
      return;
    }

    this.http
      .get<Designation[]>(this.appURL + '/GetDesignationsByDeptId?deptId=' + deptId)
      .subscribe((designations) => (this.designationList = designations ?? []));
  }

  saveEmployee(): void {
    this.isSaving = true;
    this.http.post<Employee>(this.appURL + '/CreateEmployee', this.employee).subscribe({
      next: () => {
        this.getAllEmployee();
        this.resetForm();
        this.isSaving = false;
      },
      error: () => {
        this.isSaving = false;
      },
    });
  }

  editEmployeeFromList(employeeObj: IEmployee): void {
    this.employee.employeeId = employeeObj.employeeId;
    this.employee.fullName = employeeObj.fullName;
    this.employee.email = employeeObj.email;
    this.employee.phone = employeeObj.phone;
    this.employee.gender = employeeObj.gender;
    this.employee.dateOfJoining = employeeObj.dateOfJoining?.slice(0, 10);
    this.employee.employeeType = employeeObj.employeeType;
    this.employee.salary = employeeObj.salary;
  }

  updateEmployee(): void {
    this.isSaving = true;
    this.http
      .put<Employee>(this.appURL + '/UpdateEmployee?id=' + this.employee.employeeId, this.employee)
      .subscribe({
        next: () => {
          this.getAllEmployee();
          this.resetForm();
          this.isSaving = false;
        },
        error: () => {
          this.isSaving = false;
        },
      });
  }

  deleteEmployee(employeeId: number): void {
    this.http.delete(this.appURL + '/DeleteEmployee?id=' + employeeId).subscribe(() => {
      this.getAllEmployee();
      if (this.employee.employeeId === employeeId) {
        this.resetForm();
      }
    });
  }

  resetForm(): void {
    this.employee = new Employee();
    this.designationList = [];
  }
}
