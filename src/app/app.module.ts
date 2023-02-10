import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketlistComponent } from './components/rocketlist/rocketlist.component';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RocketService } from './services/rocket.service';
import { RocketComponent } from './components/rocket/rocket.component';
import { AppRoutes } from './app.routes';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketlistComponent,
    ManageComponent,
    RocketComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes
  ],
  providers: [RocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
