import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MotherPageComponent } from './pageMother/mother-page/mother-page.component';
import { GroupOneComponent } from './pageMother/mother-page/group-one/group-one.component';
import { GroupTwoComponent } from './pageMother/mother-page/group-two/group-two.component';
import { GroupThreeComponent } from './pageMother/mother-page/group-three/group-three.component';
import {MatTabsModule} from '@angular/material/tabs';
import { GroupTwoOneComponent } from './pageMother/mother-page/group-two/group-two-one/group-two-one.component';
import { GroupTwoTwoComponent } from './pageMother/mother-page/group-two/group-two-two/group-two-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MotherPageComponent,
    GroupOneComponent,
    GroupTwoComponent,
    GroupThreeComponent,
    GroupTwoOneComponent,
    GroupTwoTwoComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
