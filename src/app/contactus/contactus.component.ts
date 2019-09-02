import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
public contactusForm: any;
public stateslist: any;
public data: any;
  constructor(private readonly meta: MetaService, public formBuilder: FormBuilder, public http: HttpClient ) {
    this.meta.setTitle('Sonoma Lab Services  |  Contact Us');
    this.meta.setTag('og:description', 'Sonoma Lab Services, sonomaLabservices, sonoma Lab services, Sonoma Lab, sonomaLab, sonoma Lab');
    this.meta.setTag('og:title', 'Sonoma Lab, sonomaLab, sonoma Lab');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'http://www.sonomaLabservices.com/assets/images/newlogo.png');

    this.contactusForm = this.formBuilder.group({
      name:['',Validators.required],
      phone:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      zip:['',Validators.required],
      message:['',Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      state: ['',Validators.required],
    })
    this.getState();
  }


  ngOnInit() {
  }
  getState() {
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
        })
    };
    var result = this.http.get('assets/data/state.json').subscribe(res =>{
      this.stateslist = res;
      console.log('stateslist');
      console.log(this.stateslist);

    });
    return result;
}
contactusFormSubmit(){
 
  console.log(this.contactusForm.value);
  console.log('ok');
  this.data = this.contactusForm.value;
  console.log(this.data);
  for (let i in this.contactusForm.controls) {
    this.contactusForm.controls[i].markAsTouched();
  }
  // if (this.contactusForm.valid) {
  //   // let link = 'http://192.169.196.208:7051/contactUs_applicant';
  //   let link = '';
  //   let data = {data: this.contactusForm.value};
  //   this.http.post(link, data)
  //       .subscribe(res => {

  //         let result: any = {};
  //         result = res;
  //         console.log(result);
  //         if (result.status == 'success') {

  //           this.contactusForm.reset();
  //        }
  //      })
  //   }
 }
inputUntouch(form: any, val: any) {
  console.log('on blur .....');
 form.controls[val].markAsUntouched();
}

}
