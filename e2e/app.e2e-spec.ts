import { FirtsAppPage } from './app.po';

describe('firts-app App', function() {
  let page: FirtsAppPage;

  beforeEach(() => {
    page = new FirtsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
