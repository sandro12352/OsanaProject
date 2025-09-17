import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OsanaModule } from './Osana/osana.module';
import { provideHttpClient } from '@angular/common/http';
import { VideoModalComponent } from './shared/video-modal/video-modal.component';
import { SafeUrlPipe } from './shared/safe-url.pipe';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    OsanaModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
