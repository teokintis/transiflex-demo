import { Component } from '@angular/core';
import { TranslationService } from '@transifex/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transiflex-demo';

  constructor( private translationService: TranslationService) {
    // translate.addLangs(['en', 'el']);
    // translate.setDefaultLang('en');
    // translate.use('en');

    //TRANSIFLEX
    translationService.init({
        token: '1/1e6782cd4ed707c2fcf6425f543b909a08af9871',
    });
  }
}