import { TranslateLoader } from '@ngx-translate/core';
import { TranslationService } from '@transifex/angular';
import { from, map, Observable, of, switchMap } from 'rxjs';

export const translationsLoaderFactory = (translationService: TranslationService): TranslateLoader => new TransifexLoader(translationService);

class TransifexLoader extends TranslateLoader {

  constructor(private translationService: TranslationService) {
    super();
  }

  getTranslation(lang: string): Observable<any> {
    return from(this.translationService.init({ token: '1/1e6782cd4ed707c2fcf6425f543b909a08af9871' })).pipe(
      map(() => this.translationService.getInstance()),
      switchMap((instance) => from(instance.fetchTranslations(lang)).pipe(map(() => instance))),
      map((instance) => instance.cache.translationsByLocale[lang])
    )
  }

}
