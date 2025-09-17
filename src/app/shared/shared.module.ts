import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoModalComponent } from './video-modal/video-modal.component';
import { SafeUrlPipe } from './safe-url.pipe';



@NgModule({
  declarations: [
    VideoModalComponent,
    SafeUrlPipe
  ],
  exports:[
    VideoModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
