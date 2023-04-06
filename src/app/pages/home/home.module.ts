import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from '../../components/hero/hero.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
