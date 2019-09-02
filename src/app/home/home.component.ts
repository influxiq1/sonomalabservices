import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Sonoma Lab Services  | Home');
    this.meta.setTag('og:description', 'Sonoma Lab Services, sonomalabservices, sonoma lab services, Sonoma lab, sonomalab, sonoma lab');
    this.meta.setTag('og:title', 'Sonoma Lab, sonomalab, sonoma lab');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'http://www.sonomalabservices.com/assets/images/newlogo.png');
  }

  ngOnInit() {
  }

}
