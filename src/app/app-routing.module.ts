import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaticPageComponent } from './static-page/static-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

export const appRoutes: Routes = [

  {
    path: '',
    component: ToolbarComponent,
    data: { title: 'Home' },
  
   
    children: [
      {
        path: '', redirectTo: 'static-page', pathMatch: 'full'
      },
    
      {
        path: 'static-page', component: StaticPageComponent, data: { title: 'Page' },
   
      },
     
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
