import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './components/about/about.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BlogComponent } from './components/blog/blog.component';
import { MaterialModule } from './material/material.module';
import { ShareDialogComponent } from './components/share-dialog/share-dialog.component';
import { PabzzyComponent } from './components/my-businesses/pabzzy/pabzzy.component';
import { HelabagComponent } from './components/my-businesses/helabag/helabag.component';
import { JedwaliComponent } from './components/my-businesses/jedwali/jedwali.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MySkillsComponent,
    MyProjectsComponent,
    ContactMeComponent,
    BlogComponent,
    routingComponents,
    ShareDialogComponent,
    PabzzyComponent,
    HelabagComponent,
    JedwaliComponent,
  ],
  entryComponents: [
    ShareDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
