import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss'],
})
export class EmpAddEditComponent implements OnInit {
  empForm: FormGroup;
  education: string[] = [
    'Metric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  constructor(
    private _fb: FormBuilder,
    private employeeService: EmployeeService,
    private dialogRef: MatDialogRef<EmpAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this.employeeService
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this.dialogRef.close(true);
              alert('Employee updated');
            },
            error: (err: any) => {
              console.log(err);
            },
          });
        this.employeeService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this.dialogRef.close(true);
            alert('Employee added successfully');
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      } else {
      }
    }
  }
  onCancel() {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }
}
