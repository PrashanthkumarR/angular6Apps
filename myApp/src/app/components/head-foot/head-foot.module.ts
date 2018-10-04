import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadFootRoutingModule } from './head-foot-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    HeadFootRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent]
})
export class HeadFootModule { }
