import { MeanstackPage } from './app.po';

describe('meanstack App', function() {
  let page: MeanstackPage;

  beforeEach(() => {
    page = new MeanstackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
