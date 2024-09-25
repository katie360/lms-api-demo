import { Component, OnInit } from '@angular/core';
import { ApiService, Student } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-debug-form',
  templateUrl: './debug-form.component.html',
  styleUrls: ['./debug-form.component.css']
})
export class DebugFormComponent implements OnInit{
  students: Student[] = [];
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string='';
  submitted: boolean = false;
  errorMessage: string = '';
  studentForm: FormGroup;



  constructor(private apiService:ApiService, private fb: FormBuilder){
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents(){
    this.apiService.getStudents().subscribe(res=>{
      this.students = res;
    })
  }

  submitForm(){
   if(this.studentForm.valid){
    const newStudent: Student = {
      firstName: this.studentForm.value.firstName,
      lastName: this.studentForm.value.lastName,
      email: this.studentForm.value.email
    };
    this.apiService.addStudent(newStudent).subscribe(student => {
      this.students.push(student);
      this.studentForm.reset();
    });
  }

  }
}
