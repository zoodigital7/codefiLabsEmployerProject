import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VenkuComponent } from './venku/venku.component';
import { PumptrakrComponent } from './pumptrakr/pumptrakr.component';
import { YclComponent } from './ycl/ycl.component';
import { HodlitComponent } from './hodlit/hodlit.component';
import { CodeLabsComponent } from './code-labs/code-labs.component';
import { UpsquadComponent } from './upsquad/upsquad.component';
import { MyProjectsRoutingModule } from './my-project-routing.module';



@NgModule({
  declarations: [MyProjectsComponent, VenkuComponent, PumptrakrComponent, YclComponent, HodlitComponent, CodeLabsComponent, UpsquadComponent],
  imports: [
    CommonModule,
    MyProjectsRoutingModule,
    NgbModule
  ]
})
export class MyProjectsModule { }
