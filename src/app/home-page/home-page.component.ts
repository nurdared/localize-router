import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { LocalizeRouterService } from "@gilsdav/ngx-translate-router";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  nameComponent = "Max";

  constructor(
    public translate: TranslateService,
    private localize: LocalizeRouterService
  ) {}

  ngOnInit() {
    // should be triggered on every language change
    this.localize.routerEvents.subscribe((language: string) => {
      console.log(language);
    });
  }

  public switchLang() {
    console.log("change lang by nurda");
    this.translate.use(this.localize.parser.currentLang === "ru" ? "en" : "ru");
    this.localize.changeLanguage(
      this.localize.parser.currentLang === "ru" ? "en" : "ru"
    );
  }
}
