import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from '../home/hero/hero.component';
import { FeaturedPostsComponent } from './featured-posts/featured-posts.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    FeaturedPostsComponent
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
