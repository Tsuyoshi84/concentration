import { AppPage } from './app.po';

describe('concentration App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have navigation text', () => {
    expect(page.getNav().getText()).toEqual('神経衰弱');
  });
});
