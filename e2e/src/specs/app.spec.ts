import { AppPage } from '../page-objects/app.po';
import { browser, logging } from 'protractor';

describe('cobiro test', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should go to the webpage', () => {
    page.navigateTo();   
  });

  it('all items shown on main page', () => {
    expect(page.allItems.isDisplayed()).toBeTruthy();
  });

  it('check tree structure', () => {    //it is not a tree structure. Items do not have root.
    expect(page.firstChildItems.getText()).toContain(' Item 7 - Level 2 ' )
    expect(page.secondChildItems.getText()).toContain('Item 8 - Level 2' )
  });


  it('check filter ', () => {  
    page.filter.sendKeys('Item 3');
    expect(page.level2Item.getText()).toContain('Item 3 - Level 2')
  });

  it('check filtered list contains child ', () => { 
    page.navigateTo(); 
    page.filter.sendKeys('Item 1');
    expect(page.level1Item.getText()).toContain('Item 2 - Level 1')
    expect(page.level2Item.getText()).toContain('Item 3 - Level 2')
  });

  it('navigate to details page ', () => {  //last item do not have details information
    page.navigateTo(); 
    page.button1.click();   
    expect(page.itemNameId.getText()).toContain('Item ID: 2');
    expect(page.itemNameTitle.getText()).toContain('Item Title: Item 2');
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID: 1');

    page.navigateTo();  
    page.button2.click();
    expect(page.itemNameId.getText()).toContain('Item ID: 3');
    expect(page.itemNameTitle.getText()).toContain('Item Title: Item 3');
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID: 2');

    page.navigateTo();
    page.button3.click();
    expect(page.itemNameId.getText()).toContain('Item ID: 4');
    expect(page.itemNameTitle.getText()).toContain('Item Title: Item 4');
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID:'); // here is no parent Id

    page.navigateTo();
    page.button4.click();
    expect(page.itemNameId.getText()).toContain('Item ID: 5');
    expect(page.itemNameTitle.getText()).toContain('Item Title: Item 5');
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID:'); // here is no parent Id


    page.navigateTo();
    page.button5.click();
    expect(page.itemNameId.getText()).toContain('Item ID: 6');
    expect(page.itemNameTitle.getText()).toContain('Item Title: Item 6');
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID: 5');
    
    page.navigateTo();
    page.button6.click();
    expect(page.itemNameId.getText()).toContain('Item ID: 7');
    expect(page.itemNameTitle.getText()).toContain('Item Title: Item 7');
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID: 6');

    page.navigateTo();
    page.button7.click();
    expect(page.itemNameId.getText()).toContain('Item ID: 8');
    expect(page.itemNameTitle.getText()).toContain('Item Title: Item 8');
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID: 6');

    page.navigateTo();
    page.button8.click();
    expect(page.itemNameId.getText()).toContain('Item ID:'); //there is no Item Id
    expect(page.itemNameTitle.getText()).toContain('Item Title:'); //there is no Title
    expect(page.itemNameParentId.getText()).toContain('Item Parent ID:'); //there is no ParentId
    
});
});
