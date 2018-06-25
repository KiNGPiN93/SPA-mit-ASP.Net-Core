import { ElVegetarianoFurioPage } from './app.po';

describe('el-vegetariano-furio App', () => {
  let page: ElVegetarianoFurioPage;

  beforeEach(() => {
    page = new ElVegetarianoFurioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
