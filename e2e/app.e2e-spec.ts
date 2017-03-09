import { RxGithubSearchPage } from './app.po';

describe('rx-github-search App', () => {
  let page: RxGithubSearchPage;

  beforeEach(() => {
    page = new RxGithubSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
