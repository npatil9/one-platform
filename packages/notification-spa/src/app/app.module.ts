import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { ManageNotificationComponent } from './manage-notification/manage-notification.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { SpaNotificationsListComponent } from './index/spa-notifications-list/spa-notifications-list.component';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import '@patternfly/pfe-select/dist/pfe-select';
import '@patternfly/pfe-select/dist/pfe-select';
import '@patternfly/pfe-toast/dist/pfe-toast';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ManageNotificationComponent,
    SidePanelComponent,
    SpaNotificationsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
