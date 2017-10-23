import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNav() {
    return element(by.css('nav'));
  }

  getFooter() {
    return element(by.css('footer'));
  }
}
