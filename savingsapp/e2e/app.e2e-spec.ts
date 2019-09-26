import { SavingsappPage } from './app.po';

describe('savingsapp App', function() {
  let page: SavingsappPage;

  beforeEach(() => {
    page = new SavingsappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
