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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
