import { RestoMenuAppPage } from './app.po';

describe('resto-menu-app App', () => {
  let page: RestoMenuAppPage;

  beforeEach(() => {
    page = new RestoMenuAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
