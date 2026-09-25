import { ContainerComponent, LinkComponent } from '../../shared/component-kit';

import appState from '../../app/state';

import styles from './Navigation.module.css';

export default class Navigation extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'nav',
      id: 'header-nav',
      classes: styles.navigation,
      ...rest,
    });

    this.render();

    this.unsubscribe = appState.subscribe((state) => {
      this.update(state.menu.open);
    });

    this.update(appState.getState().menu.open);
  }

  render() {
    const homeLink = new LinkComponent({
      content: 'Home',
      href: '/',
    });

    const aboutLink = new LinkComponent({
      content: 'About',
      href: '/#about',
    });

    const toolsLink = new LinkComponent({
      content: 'Tools',
      href: '/#featured-tools',
    });

    const catalogLink = new LinkComponent({
      content: 'Catalog',
      href: '/catalog',
    });

    const navList = new ContainerComponent({
      tag: 'ul',
      classes: styles.navigation__list,
      children: [
        new ContainerComponent({
          tag: 'li',
          children: [homeLink],
        }),
        new ContainerComponent({
          tag: 'li',
          children: [aboutLink],
        }),
        new ContainerComponent({
          tag: 'li',
          children: [toolsLink],
        }),
        new ContainerComponent({
          tag: 'li',
          children: [catalogLink],
        }),
      ],
    });

    this.setChildren([navList]);

    this.links = [homeLink, aboutLink, toolsLink, catalogLink];

    this.addListeners();

    this.unsubscribe = appState.subscribe((state) => {
      this.update(state.menu.open);
    });

    this.update(appState.getState().menu.open);
  }

  addListeners() {
    this.links.forEach((link) => {
      link.setListeners({
        click: () => {
          appState.dispatch({
            type: 'MENU_CLOSE',
          });
        },
      });
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        appState.dispatch({
          type: 'MENU_CLOSE',
        });
      }
    });

    const mediaQuery = window.matchMedia('(min-width: 769px)');

    mediaQuery.addEventListener('change', (event) => {
      if (event.matches) {
        appState.dispatch({
          type: 'MENU_CLOSE',
        });
      }
    });
  }

  update(isOpen) {
    this.toggleClasses(styles.open, isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
}
