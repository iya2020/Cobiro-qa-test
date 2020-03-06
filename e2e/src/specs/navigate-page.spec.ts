import { NavPage } from '../page-objects/navigation-page.po';
import { browser, logging } from 'protractor';

describe('cobiro test', () => {
  let navPage: NavPage;

  beforeEach(() => {
    navPage = new NavPage();
  });

  it('check link', () => {
    expect(navPage.image.getText()).toBe('hairstylist.com');
  });

  it('number of navigation list items', () => {
    expect(navPage.navigationList.count()).toBe(6);;
  });

  it('check user name', () => {
    expect(navPage.headerName.getText()).toBe('Morten');
  });
});
