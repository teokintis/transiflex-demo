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

  // ngOnInit(){
  //   this.translationService.init({ token: '1/1e6782cd4ed707c2fcf6425f543b909a08af9871'}).then((res) =>{
  //     this.translationService.translationsFetched.subscribe((res: boolean) =>{
  //       console.warn('translationsFetched', res);
  //     });
  //     const instance = this.translationService.getInstance();
  //     if(instance) instance.fetchTranslations('el');

  //     setTimeout(() => {
  //       console.warn('5000', instance.cache.translationsByLocale.el);
  //     }, 5000);
  //   });
  // }


  async ngOnInit(){
    await this.translationService.init({ token: '1/1e6782cd4ed707c2fcf6425f543b909a08af9871'});
    const instance = this.translationService.getInstance();
    await instance.fetchTranslations('el');
    console.warn('5000', instance.cache.translationsByLocale.el);
  }
}