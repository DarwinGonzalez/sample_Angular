import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to miAplicacion!');
  // });

  it('Se debe mostrar Mi tienda', () => {
    page.navigateTo('/');
    expect(page.getParagraphText('app-root h1')).toEqual('Mi tienda');
  });

  it('Se debe navegar a la página nosotros a través del segundo enlace', () => {
    page.navigateTo('/');
    let navlink = page.getAllElements('a').get(1); navlink.click(); expect(page.getParagraphText('h3')).toBe('Nosotros');
  });
});
