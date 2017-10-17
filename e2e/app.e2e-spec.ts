import { AppPage } from './app.po';

describe('concentration App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have navigation text', () => {
    expect(page.getNav().getText()).toEqual('Concentration');
  });

  it('should have footer text', () => {
    expect(page.getFooter().getText()).toEqual('Concentration');
  });
});
