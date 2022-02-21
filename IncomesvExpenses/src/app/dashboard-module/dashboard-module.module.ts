import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { DashboardModuleComponent } from './dashboard-module.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailComponent } from './pages/detail/detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { AccountFeature } from './store/Account.reducer';
import { AccountEffects } from './store/Account.effects';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    DashboardModuleComponent,
    HomeComponent,
    DetailComponent,
    MenuComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule,
    StoreModule.forFeature(AccountFeature),
    EffectsModule.forFeature([AccountEffects])
  ]
})
export class DashboardModuleModule { }
