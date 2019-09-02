import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetaGuard } from '@ngx-meta/core';


import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { LabsComponent } from './labs/labs.component';
import { OfferedLabsComponent } from './offered-labs/offered-labs.component';

const appRoutes: Routes = [
  { path: 'header',      component: HeaderComponent,
  data: {
      meta: {
          title: 'Header',
          description: 'Have you seen my rubber duckie?'
      }
  }},
  { path: 'footer',      component: FooterComponent,
  data: {
      meta: {
          title: 'Footer',
          description: 'Have you seen my rubber duckie?'
      }
  }},
  { path: 'home',      component: HomeComponent,
  data: {
      meta: {
          title: 'Home',
          description: 'Have you seen my rubber duckie?'
      }
  }},
  { path: '',      component: HomeComponent,
  data: {
      meta: {
          title: 'Home',
          description: 'Have you seen my rubber duckie?'
      }
  }},
  { path: 'services',      component: ServicesComponent,
  data: {
      meta: {
          title: 'Services',
          description: 'Have you seen my rubber duckie?'
      }
  }},
  { path: 'labs',      component: LabsComponent,
  data: {
      meta: {
          title: 'Labs',
          description: 'Have you seen my rubber duckie?'
      }
  }},
  { path: 'offered-labs',      component: OfferedLabsComponent,
  data: {
      meta: {
          title: 'Offered Labs',
          description: 'Have you seen my rubber duckie?'
      }
  }},
  { path: 'contact-us',      component: ContactusComponent,
      data: {
          meta: {
              title: 'Contact Us',
              description: 'Have you seen my rubber duckie?'
          }
      }}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
