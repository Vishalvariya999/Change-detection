import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './components/posts/posts.component';
import { AirlineDeetailsComponent } from './components/airline-deetails/airline-deetails.component';
import {
  NgxUiLoaderModule,
  NgxUiLoaderConfig,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5,
};
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PostsComponent,
    AirlineDeetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
