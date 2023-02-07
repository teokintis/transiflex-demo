import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TransifexApi, transifexApi } from '@transifex/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'transiflex-demo';

  constructor( public translate: TranslateService) {
    translate.addLangs(['en', 'el']);
    translate.setDefaultLang('en');
    translate.use('en');

  }

  ngOnInit(){
    // this.transifexApi.setup({host:'', auth: "1/af0b194c4a5f3b45e0e5d6b113d9f90eadb82901" });
    // this.transifexApi.Organization.get("1").then((res) =>{
    //   debugger;
    // });
  }
}