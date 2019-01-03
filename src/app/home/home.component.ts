import { Component } from '@angular/core';
// https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
// ICO guide for pluralization http://userguide.icu-project.org/formatparse/messages
import { TranslateService } from '@ngx-translate/core';
import { Globals } from '.././appshared/appshared';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';


@Component({
  selector: 'appc-home-component',
  templateUrl: './home.component.html'
})

export class HomeComponent {

  // ++ View interpolations ++ //
  title = _('demo.title');
  anothervar = _('anothervar');
  color = Globals.randomColor();

  // https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
  constructor(
    private translate: TranslateService,
  ) {
    translate.setDefaultLang('en');
  }
  public useLanguage(language: string) {
    this.translate.use(language);
  }
  public changeColor() {
    this.color = Globals.randomColor();
  }

}
