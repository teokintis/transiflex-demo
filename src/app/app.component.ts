import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transiflex-demo';

  constructor( public translate: TranslateService, private translationService: TranslationService) {
    translate.addLangs(['en', 'el']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
}