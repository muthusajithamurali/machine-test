import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  student: any = {
    1: { firstname:"Arjun", lastname: "c", rollnumber: "1", age:"20",Gender:"male"},
    2: { firstname:"Abin", lastname: "Joy", rollnumber: "2", age:"20",Gender:"male"},
    3: { firstname:"jishnu", lastname: "jayadev", rollnumber: "3", age:"20",Gender:"male"},
    4: { firstname:"suni", lastname: "alex", rollnumber: "4", age:"20",Gender:"female"},
    

  }

  constructor() { }
}
