import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostPageComponent } from './post-page.component';
import { PostPageRoutingModule } from './post-page-routing.module';



@NgModule({
  declarations: [
    PostPageComponent
  ],
  exports: [
    PostPageComponent
  ],
  imports: [
    CommonModule,
    PostPageRoutingModule
  ]
})
export class PostPageModule { }
