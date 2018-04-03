import { AppPage } from './app.po';

<<<<<<< HEAD
describe('ng5 App', () => {
=======
describe('elections App', () => {
>>>>>>> eb48a168cb90c300d362d78649d4589a570468e9
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
