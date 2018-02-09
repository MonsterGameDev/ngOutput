import { CoffeeshopPage } from './app.po';

describe('coffeeshop App', function() {
  let page: CoffeeshopPage;

  beforeEach(() => {
    page = new CoffeeshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
