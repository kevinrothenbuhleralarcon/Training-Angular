import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {Page1Component} from "./page1/page1.component";
import {Page2Component} from "./page2/page2.component";
import {SubPageHomeComponent} from "./sub-page-home/sub-page-home.component";
import {Page3Component} from "./page3/page3.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "p1", component: Page1Component},
  {
    path: "sub",
    component: SubPageHomeComponent,
    children: [
      { path: "p2", component: Page2Component},
      { path: "p3", component: Page3Component},
    ]
  },
  { path: "**", component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
