import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgXtruncateModule } from 'ngx-truncate';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { AppService } from './app.service';
import {FeedbackService} from './modules/feedback/feedback.service';
import { FeedbackHomeComponent } from './modules/feedback//home/feedback-home.component';
import {FeedbackItemComponent} from './modules/feedback/feedback-item/feedback-item.component';


@NgModule({
  declarations: [
    AppComponent,
    FeedbackHomeComponent,
    FeedbackItemComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    NgPipesModule,
    NgxPaginationModule,
    NgXtruncateModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppService,
    Apollo,
    HttpLink,
    FeedbackService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }