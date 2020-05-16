import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent, BoardContainerComponent, CardComponent, CarouselComponent, MenuComponent } from '@components';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/routes';

@NgModule({
  declarations: [
    AppComponent,
    BoardContainerComponent,
    BoardComponent,
    CarouselComponent,
    CardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
