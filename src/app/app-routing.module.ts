import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { BillingComponent } from './billing/billing.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomescreenComponent },
  { path: 'patientregister', component: PatientRegistrationComponent },
  { path: 'billing', component: BillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
