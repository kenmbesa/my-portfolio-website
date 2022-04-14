import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'my-skills', component: MySkillsComponent},
  { path: 'my-projects', component: MyProjectsComponent},
  { path: 'contact-me', component: ContactMeComponent},
  { path: 'blog', component: BlogComponent},
  { path: '', redirectTo: 'about', pathMatch: 'full'}
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
