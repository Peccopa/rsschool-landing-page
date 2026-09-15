import { Router } from './shared/router-kit';

import App from './app/App';
import HomePage from './pages/home/HomePage';
import CatalogPage from './pages/catalog/CatalogPage';

const app = new App();
app.hide(false);

document.body.replaceChildren(app.element);
globalThis.addEventListener('load', () => {
  app.show(true, 500);
});

const router = new Router({
  '/': {
    name: 'home',
  },
  '/catalog': {
    name: 'catalog',
  },
});

router.subscribe(({ route }) => {
  if (route?.name === 'home') {
    renderHome();
  }

  if (route?.name === 'catalog') {
    renderCatalog();
  }
});

router.start();

function renderHome() {
  const homePage = new HomePage();
  app.setChildren(homePage);
}

function renderCatalog() {
  const catalogPage = new CatalogPage();
  app.setChildren(catalogPage);
}
