import { Component, OnInit, HostListener } from '@angular/core';
import {FormControl, FormBuilder, Validators, FormGroup} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  windowScrolled: boolean;
  public footerContactUsForm: FormGroup;
  public data: any;

  constructor(public formBuilder:FormBuilder, public http:HttpClient) {
    this.footerContactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
      message: ['', Validators.required],
    })
   }

  @HostListener("window:scroll", [])

   onWindowScroll() {
       if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
           this.windowScrolled = true;
       }
       else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
           this.windowScrolled = false;
       }
   }

  scrollToTop() {
    (function smoothscroll() {

        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }

    })();
}


  
  ngOnInit() {
  }
  footerContactUsFormSubmit(){
    console.log(this.footerContactUsForm.value);
    console.log('ok');
    this.data = this.footerContactUsForm.value;
    console.log(this.data);
    for (let i in this.footerContactUsForm.controls) {
      this.footerContactUsForm.controls[i].markAsTouched();
    }
    if (this.footerContactUsForm.valid) {
      // let link = 'http://192.169.196.208:7051/contactUs_applicant';
      let link = '';
      let data = {data: this.footerContactUsForm.value};
      this.http.post(link, data)
          .subscribe(res => {

            let result: any = {};
            result = res;
            console.log(result);
            if (result.status == 'success') {

              this.footerContactUsForm.reset();

              setTimeout(()=>{

              },2000);
           }
         })
      }
   }

  inputUntouch(form: any, val: any) {
     console.log('on blur .....');
    form.controls[val].markAsUntouched();
  }
}
