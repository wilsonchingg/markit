import { NgModule }             from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { AccountComponent } from './account/account.component';
import { MarketComponent } from './markets/markets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricCurrentComponent } from './historic-current/historic-current.component';

import { AuthGuard } from '../service/auth/authGuard';
import { AuthService } from '../service/auth/authService';

const routes: Routes = [
	{ path: '', component: HomepageComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'historicCurrent/:marketId', component: HistoricCurrentComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
	{ path: 'user/setting', component: AccountComponent, canActivate: [AuthGuard] },
	{ path: 'confirmUser', component: ConfirmUserComponent },
	{ path: 'markets', component: MarketComponent, canActivate: [AuthGuard] },
];

@NgModule({
  exports: [RouterModule],
  providers: [AuthService, AuthGuard],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
