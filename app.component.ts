import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signForm: FormGroup;
  forbiddenUsernames = ['Test'];
  ngOnInit(){
    this.signForm = new FormGroup({
      'userData': new FormGroup({
        'project': new FormControl(null, [Validators.required],this.forbiddenNames),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'state': new FormControl(null)
      })     
    });
  }

  onSubmit(){
    console.log(this.signForm);
  }

  

  forbiddenNames(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value==='Test'){
          resolve({'nameIsForbidden':true});
        }else{
          resolve(null);
        }
      },1500);
    });
    return promise;
  }
  

  
}
