import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material-ui.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component'
import { ProjectDescrptionComponent } from './project-descrption/project-descrption.component';
import { HttpClientModule } from '@angular/common/http';
const approutes: Routes = [
  {path: "project/:id", component: ProjectDescrptionComponent} ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectDescrptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MaterialModule, ReactiveFormsModule, FormsModule,
    RouterModule.forRoot(approutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
