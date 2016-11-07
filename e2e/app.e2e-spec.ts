import { TutorialHeroCliPage } from './app.po';

describe('tutorial-hero-cli App', function() {
  let page: TutorialHeroCliPage;

  beforeEach(() => {
    page = new TutorialHeroCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
