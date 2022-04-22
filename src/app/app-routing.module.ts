import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HelabagComponent } from './components/my-businesses/helabag/helabag.component';
import { JedwaliComponent } from './components/my-businesses/jedwali/jedwali.component';
import { PabzzyComponent } from './components/my-businesses/pabzzy/pabzzy.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';


const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'my-skills', component: MySkillsComponent},
  { path: 'my-projects', component: MyProjectsComponent},
  { path: 'contact-me', component: ContactMeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'pabzzy', component: PabzzyComponent},
  { path: 'helabag', component: HelabagComponent},
  { path: 'jedwali', component: JedwaliComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  AboutComponent,
  MySkillsComponent,
  MyProjectsComponent,
  ContactMeComponent,
  BlogComponent
];
