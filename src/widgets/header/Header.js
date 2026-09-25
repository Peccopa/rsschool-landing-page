import styles from './Header.module.css';

import { applyTheme, getTheme, setTheme } from '../../shared/theme';

import {
  ContainerComponent,
  LinkComponent,
  ButtonComponent,
} from '../../shared/component-kit';

import Logo from '../logo/Logo';

export default class Header extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'header',
      id: 'header',
      classes: styles.header,
      ...rest,
    });

    this.render();
  }

  render() {
    const currentTheme = getTheme();

    applyTheme(currentTheme);

    const logo = new Logo();

    const homeLink = new LinkComponent({
      content: 'Home',
      href: '/',
    });

    const toolsLink = new LinkComponent({
      content: 'Tools',
      href: '/#featured-tools',
    });

    const aboutLink = new LinkComponent({
      content: 'About',
      href: '/#about',
    });

    const catalogLink = new LinkComponent({
      content: 'Catalog',
      href: '/catalog',
    });

    const navList = new ContainerComponent({
      tag: 'ul',
      classes: styles.header__nav_list,
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

    const nav = new ContainerComponent({
      tag: 'nav',
      id: 'header-nav',
      classes: styles.header__nav,
      children: [navList],
    });

    const themeButton = new ButtonComponent({
      content: currentTheme === 'dark' ? '☀' : '☾',
      classes: styles['theme-button'],
      attributes: {
        'aria-label':
          currentTheme === 'dark'
            ? 'Switch to light theme'
            : 'Switch to dark theme',
      },
      listeners: {
        click: () => {
          const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';

          setTheme(nextTheme);
          applyTheme(nextTheme);

          themeButton.setContent(nextTheme === 'dark' ? '☀' : '☾');

          themeButton.setAttributes({
            'aria-label':
              nextTheme === 'dark'
                ? 'Switch to light theme'
                : 'Switch to dark theme',
          });
        },
      },
    });

    const actions = new ContainerComponent({
      classes: styles.header__actions,
      children: [themeButton],
    });

    const burgerButton = new ButtonComponent({
      classes: styles.header__burger,
      content: '',
      attributes: {
        'aria-label': 'Open menu',
        'aria-expanded': 'false',
        'aria-controls': 'header-nav',
      },
      listeners: {
        click: () => {
          const isOpen = nav.hasClasses(styles.open);

          nav.toggleClasses(styles.open, !isOpen);
          burgerButton.toggleClasses(styles.open, !isOpen);

          document.body.style.overflow = isOpen ? '' : 'hidden';

          burgerButton.setAttributes({
            'aria-label': isOpen ? 'Open menu' : 'Close menu',
            'aria-expanded': String(!isOpen),
          });
        },
      },
    });

    const navLinks = [homeLink, aboutLink, toolsLink, catalogLink];

    navLinks.forEach((link) => {
      link.setListeners({
        click: () => {
          nav.toggleClasses(styles.open, false);
          burgerButton.toggleClasses(styles.open, false);
          document.body.style.overflow = '';
          burgerButton.setAttributes({
            'aria-label': 'Open menu',
            'aria-expanded': 'false',
          });
        },
      });
    });

    burgerButton.setChildren([
      new ContainerComponent({
        tag: 'span',
        classes: styles['header__burger-lines'],
        children: [
          new ContainerComponent({
            tag: 'span',
            classes: styles['header__burger-line'],
          }),
          new ContainerComponent({
            tag: 'span',
            classes: styles['header__burger-line'],
          }),
          new ContainerComponent({
            tag: 'span',
            classes: styles['header__burger-line'],
          }),
        ],
      }),
    ]);

    this.setChildren([logo, nav, actions, burgerButton]);
  }
}
