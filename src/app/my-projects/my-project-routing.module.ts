
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeLabsComponent } from './code-labs/code-labs.component';
import { HodlitComponent } from './hodlit/hodlit.component';
import { MyProjectsComponent } from './my-projects.component';
import { PumptrakrComponent } from './pumptrakr/pumptrakr.component';
import { UpsquadComponent } from './upsquad/upsquad.component';
import { VenkuComponent } from './venku/venku.component';
import { YclComponent } from './ycl/ycl.component';
const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'venku'
            },
            {
                path: 'venku',
                component: VenkuComponent
            },
            {
                path: 'pumptrakr',
                component: PumptrakrComponent
            },
            {
                path: 'youth-coding-league',
                component: YclComponent
            },
            {
                path: 'hodlit',
                component: HodlitComponent
            },
            {
                path: 'code-labs',
                component: CodeLabsComponent
            },
            {
                path: 'upsquad',
                component: UpsquadComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
    ]
})
export class MyProjectsRoutingModule { }

