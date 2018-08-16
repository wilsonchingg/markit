import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ConfirmUserComponent } from './confirm-user/confirm-user.component';
import { AccountComponent } from './account/account.component';
import { UserSettingComponent } from './account/user-setting/user-setting.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GraphComponent } from './graph/graph.component';
import { CurrencyPreviewComponent } from './currency-preview/currency-preview.component';
import { HistoricCurrentComponent } from './historic-current/historic-current.component';
import { MarketComponent } from './markets/markets.component';

import { AuthService } from '../service/auth/authService';
import { ServerAPI } from '../service/server-api/server-api.service';
import { DataStreamService } from '../service/server-api/data-stream.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MarketDatatableComponent } from './market-datatable/market-datatable.component';
import { RssRendererComponent } from './rss-renderer/rss-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmUserComponent,
    AccountComponent,
    UserSettingComponent,
    HomepageComponent,
    GraphComponent,
    CurrencyPreviewComponent,
    HistoricCurrentComponent,
    MarketComponent,
    MarketDatatableComponent,
    RssRendererComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  providers: [AuthService, ServerAPI, DataStreamService],
  bootstrap: [AppComponent],
})
export class AppModule { }
