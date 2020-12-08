import { Component, OnInit, VERSION } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import {FormControl,Validators,FormArray} from '@angular/forms';
import { Employee } from './datamodel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  
  EmployeeSignupForm:FormGroup;
  
  employeeList:Employee[]=[]; 

  employee:Employee; // = new Employee('101','Rajaguru','Peelamedu','9999999999');

  ngOnInit(): void 
  {
    this.EmployeeSignupForm = new FormGroup({
      'employeeid':new FormControl(null,Validators.required),
      'name':new FormControl(null,Validators.required),
      'address':new FormControl(null,Validators.required),
      'phonenumber':new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    });
    
    // this.EmployeeSignupForm.setValue({
    //   'employeeid':this.employee.employeeid,
    //   'name':this.employee.name,
    //   'address':this.employee.address,
    //   'phonenumber':this.employee.phonenumber
    // });

  }

  onSubmit()
  {
    const {employeeid,name,address,phonenumber} = this.EmployeeSignupForm.value;
    this.employeeList.push(
      new Employee(employeeid,name,address,phonenumber)
    )

     console.log('Employee Form submitted');
     console.log(this.employeeList[this.employeeList.length-1]); 

  }

  onReset()
  {
    this.employee = new Employee('101','Raja','Peelamedu','9999999999');
    this.EmployeeSignupForm.setValue({
      'employeeid':this.employee.employeeid,
      'name':this.employee.name,
      'address':this.employee.address,
      'phonenumber':this.employee.phonenumber
    });

    //this.EmployeeSignupForm.reset(); // Default reset
    console.log("form reseted to default values");
   
  }

  onPatch()
  {
    this.EmployeeSignupForm.patchValue(
      {
        employeeid:'801',
        name:'Guru',
        address:'Ramanathapuram',
        phonenumber:'9876432109',
        
      }
    )

    //console.log(this.employeeList);

    console.log("Patch values applied to the form");

  }

  get f()
  {
    return this.EmployeeSignupForm.controls;
  }

}