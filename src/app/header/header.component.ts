import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public url:any;
  constructor(private router: Router) {
    this.router.events.subscribe(val=> {
      if (val instanceof NavigationEnd) {
          this.url = this.router.routerState.snapshot.root.firstChild.routeConfig.path;
          console.log(this.url)
      }
  });
  }

  ngOnInit() {
  
  }
}
