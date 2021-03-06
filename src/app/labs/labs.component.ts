import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Sonoma Lab Services  |  Services');
    this.meta.setTag('og:description', 'Sonoma lab Services, sonomalabservices, sonoma lab services, Sonoma lab, sonomalab, sonoma lab');
    this.meta.setTag('og:title', 'Sonoma lab, sonomalab, sonoma lab');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'http://www.sonomalabservices.com/assets/images/newlogo.png');
  }

  ngOnInit() {
  }

}
