import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  
    studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4),Validators.pattern('[0-9]*')]],
      lastName: ['',[Validators.required, Validators.minLength(4),Validators.pattern('[0-9]*')]],
      Rollnumber: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      age: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      Gender: ['', [Validators.required, Validators.minLength(6)]]
    })  
  


  constructor(private fb:FormBuilder,private router:Router,private ds:DataService) { }

  

  ngOnInit(): void {
  }
add(){
  
    if(this.studentForm.valid){
      var firstName=this.studentForm.value.firstName
      var lastName=this.studentForm.value.lastName
      var Rollnumber=this.studentForm.value.Rollnumber
      var age=this.studentForm.value.age
      var Gender=this.studentForm.value.age
      this.ds.student(firstName,lastName,Rollnumber,age,Gender)
      
      .subscribe((result:any) =>{
      if(result){
              alert(result.message)
              this.router.navigateByUrl("")
      }
    },
    (result:any)=>{
      
      
         alert(result.error.message)
         this.router.navigateByUrl("")
      }
    )
      }
     
    
    else{
      alert("invalid form")
    }
  }
    
}
