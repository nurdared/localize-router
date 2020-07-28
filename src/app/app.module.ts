import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HomePageComponent } from "./home-page/home-page.component";
import { AppRoutingModule, routes } from "./app-routing.module";
import { Location } from "@angular/common";
import {
  LocalizeRouterModule,
  LocalizeParser,
  ManualParserLoader,
  CacheMechanism,
  LocalizeRouterSettings,
} from "@gilsdav/ngx-translate-router";
import { LocalizeRouterHttpLoader } from "@gilsdav/ngx-translate-router-http-loader";
import { HomeTownComponent } from './home-town/home-town.component';

export function HttpLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient
) {
  return new LocalizeRouterHttpLoader(
    translate,
    location,
    { ...settings, alwaysSetPrefix: true },
    http
  );
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/locales/", ".json");
}

@NgModule({
  declarations: [AppComponent, HomePageComponent, HomeTownComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      cacheMechanism: CacheMechanism.Cookie,
      cookieFormat: "{{value}};{{expires:20}};path=/",
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setDefaultLang("en");
  }
}
