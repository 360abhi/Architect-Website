import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Projectservice } from './Services/project.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BglogoComponent } from './bglogo/bglogo.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { Aboutservice } from './Services/about.service';
import { ContactComponent } from './contact/contact.component';
import { FootComponent } from './foot/foot.component';
import { Grayscale } from './Services/grayscale.service';
import { RouterModule, Routes } from '@angular/router';

// const appRoutes : Routes = [
//   {path : "", component: AppComponent},
//   {path : "contact", component : ContactComponent},
//   {path : "about", component : AboutComponent},
//   {path : "projects", component : ProjectsComponent},
// ]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BglogoComponent,
    ProjectsComponent,
    AboutComponent,
    ContactComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
