import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [AboutMeComponent],
  imports: [
    NgbModule,
    CommonModule
  ]
})
export class AboutMeModule { }
