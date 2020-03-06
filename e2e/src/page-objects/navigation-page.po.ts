import { browser, by, element } from 'protractor';

export class NavPage {

  public image = element(by.css('.nav__image'));
  public navigationList = element.all(by.tagName('a'));
  public headerName = element(by.css('.header__name'));

}
