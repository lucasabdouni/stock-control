import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';

import { CookieService } from 'ngx-cookie-service';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { SharedModule } from 'src/app/shared/shared.module';
import { DASHBOARD_ROUTES } from './dashboard.routing';
import { DashboardHomeComponent } from './page/dashboard-home/dashboard-home.component';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(DASHBOARD_ROUTES),
    // PrimeNg
    SidebarModule,
    ButtonModule,
    ToolbarModule,
    CardModule,
    ToastModule,
    ChartModule,
    SharedModule,
  ],
  providers: [MessageService, CookieService],
})
export class DashboardModule {}
