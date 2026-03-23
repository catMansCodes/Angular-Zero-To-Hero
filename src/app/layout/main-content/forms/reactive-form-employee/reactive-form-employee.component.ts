import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
  selector: 'app-reactive-form-employee',
  imports: [
    PageTitleComponent,
    RouterLink,
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
  ],
  templateUrl: './reactive-form-employee.component.html',
})
export class ReactiveFormEmployeeComponent implements OnInit {
  private readonly http = inject(HttpClient);

  heading = 'Reactive Form Employee Demo';
  subHeading =
    'Manage employee data with FormGroup, validators, and HTTP APIs in a reactive way.';

  employeeList: IEmployee[] = [];
  departmentList: Department[] = [];
  designationList: Designation[] = [];

  readonly appURL = 'https://api.freeprojectapi.com/api/EmployeeApp';
  isSaving = false;

  employeeForm: FormGroup = new FormGroup({
    employeeId: new FormControl(0),
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
    gender: new FormControl('Male', Validators.required),
    dateOfJoining: new FormControl('', Validators.required),
    employeeType: new FormControl('Permanent', Validators.required),
    salary: new FormControl(0, [Validators.required, Validators.min(1)]),
    departmentId: new FormControl(0, [Validators.required, Validators.min(1)]),
    designationId: new FormControl(0, [Validators.required, Validators.min(1)]),
  });

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
    const deptId = Number(this.employeeForm.value.departmentId ?? 0);
    this.employeeForm.patchValue({ designationId: 0 });
    this.designationList = [];

    if (!deptId) {
      return;
    }

    this.http
      .get<Designation[]>(this.appURL + '/GetDesignationsByDeptId?deptId=' + deptId)
      .subscribe((designations) => (this.designationList = designations ?? []));
  }

  saveEmployee(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const employee = this.employeeForm.value as Employee;

    this.http.post<Employee>(this.appURL + '/CreateEmployee', employee).subscribe({
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
    this.employeeForm.patchValue({
      employeeId: employeeObj.employeeId,
      fullName: employeeObj.fullName,
      email: employeeObj.email,
      phone: employeeObj.phone,
      gender: employeeObj.gender,
      dateOfJoining: employeeObj.dateOfJoining?.slice(0, 10),
      employeeType: employeeObj.employeeType,
      salary: employeeObj.salary,
    });
  }

  updateEmployee(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.isSaving = true;
    const employee = this.employeeForm.value as Employee;

    this.http
      .put<Employee>(this.appURL + '/UpdateEmployee?id=' + employee.employeeId, employee)
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
      if (Number(this.employeeForm.value.employeeId) === employeeId) {
        this.resetForm();
      }
    });
  }

  resetForm(): void {
    this.employeeForm.reset({
      employeeId: 0,
      fullName: '',
      email: '',
      phone: '',
      gender: 'Male',
      dateOfJoining: '',
      employeeType: 'Permanent',
      salary: 0,
      departmentId: 0,
      designationId: 0,
    });
    this.designationList = [];
  }
}
