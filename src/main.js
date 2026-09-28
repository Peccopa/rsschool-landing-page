import './styles/main.css';

import { Router } from './shared/router-kit';

import App from './app/App';

import HomePage from './pages/home/HomePage';
import CatalogPage from './pages/catalog/CatalogPage';

import Header from './widgets/header/Header';
import Main from './widgets/main/Main';
import Footer from './widgets/footer/Footer';

const app = new App();

app.hide(false);

const header = new Header();
const main = new Main();
const footer = new Footer();

app.setChildren([header, main, footer]);

document.body.replaceChildren(app.element);

globalThis.addEventListener('load', () => {
  app.show(true, 1500);
});

const router = new Router(
  {
    '/': {
      name: 'home',
    },
    '/catalog': {
      name: 'catalog',
    },
  },
  '/rsschool-landing-page',
);

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
  const hash = window.location.hash;

  main.setPage(new HomePage());

  if (hash) {
    setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({
        behavior: 'smooth',
      });
    }, 350);
  }
}

function renderCatalog() {
  main.setPage(new CatalogPage());
}
