import { browser, by, element } from 'protractor';

export class AppPage {

  public main = element(by.tagName('main'));
  public allItems = this.main.element(by.tagName('ul'));
  public level1Item = element(by.css('.indent-1'));
  public level2Item = element(by.css('.indent-2'));
  public firstChildItems = element.all(by.css('[class=""]')).first().element(by.css ('.indent-1'));
  public secondChildItems = element.all(by.css('[class=""]')).first().element(by.css ('.indent-2'));
  public filter = element(by.css('.ng-valid'));  
  public button1 = element.all(by.buttonText('Button')).get(0);
  public button2 = element.all(by.buttonText('Button')).get(1);
  public button3 = element.all(by.buttonText('Button')).get(2);
  public button4 = element.all(by.buttonText('Button')).get(3);
  public button5 = element.all(by.buttonText('Button')).get(4);
  public button6 = element.all(by.buttonText('Button')).get(5);
  public button7 = element.all(by.buttonText('Button')).get(6);
  public button8 = element.all(by.buttonText('Button')).get(7);
  public itemNameId = element.all(by.css('.itemName')).get(0);
  public itemNameTitle = element.all(by.css('.itemName')).get(1);
  public itemNameParentId = element.all(by.css('.itemName')).get(2);
  
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
}
