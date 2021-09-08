import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent, pathMatch: 'full' },
    { path: 'about-me', component: AboutMeComponent, pathMatch: 'full' },
    {
        path: 'projects', pathMatch: 'prefix', loadChildren: () => import('./my-projects/my-projects.module')
            .then(mod => mod.MyProjectsModule)
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
