import { Component, OnInit } from '@angular/core';
import { MetaService } from '@ngx-meta/core';

@Component({
  selector: 'app-offered-labs',
  templateUrl: './offered-labs.component.html',
  styleUrls: ['./offered-labs.component.css']
})
export class OfferedLabsComponent implements OnInit {

  constructor(private readonly meta: MetaService) {
    this.meta.setTitle('Sonoma Lab Services  |  Offered Labs');
    this.meta.setTag('og:description', 'Sonoma lab Services, sonomalabservices, sonoma lab services, Sonoma lab, sonomalab, sonoma lab');
    this.meta.setTag('og:title', 'Sonoma lab, sonomalab, sonoma lab');
    this.meta.setTag('og:type', 'website');
    this.meta.setTag('og:image', 'http://www.sonomalabservices.com/assets/images/newlogo.png');
  }

  ngOnInit() {
  }

}
