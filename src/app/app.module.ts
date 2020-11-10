import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ServiceWorkerModule } from "@angular/service-worker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  BoardComponent,
  BoardContainerComponent,
  CardComponent,
  CarouselComponent,
  DialogComponent,
  ImagesLoaderContainerComponent,
  MenuComponent,
} from "src/app/components";
import { routes } from "src/app/routes";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    BoardContainerComponent,
    BoardComponent,
    CarouselComponent,
    CardComponent,
    MenuComponent,
    DialogComponent,
    ImagesLoaderContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
    MatButtonModule,
    MatDialogModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent],
})
export class AppModule {}
