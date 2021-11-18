import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SkeletonComponent } from './skeleton/skeleton.component';


@NgModule({
  declarations: [
    FooterComponent,
    LoginLayoutComponent,
    NavigationComponent,
    SidebarComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
