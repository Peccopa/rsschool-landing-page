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
      classes: 'header',
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

    const nav = new ContainerComponent({
      tag: 'nav',
      classes: 'header__nav',
      children: [homeLink, aboutLink, toolsLink, catalogLink],
    });

    const themeButton = new ButtonComponent({
      content: currentTheme === 'dark' ? 'Light mode' : 'Dark mode',
      listeners: {
        click: () => {
          const nextTheme = getTheme() === 'dark' ? 'light' : 'dark';

          setTheme(nextTheme);
          applyTheme(nextTheme);

          themeButton.setContent(
            nextTheme === 'dark' ? 'Light mode' : 'Dark mode',
          );
        },
      },
    });

    const actions = new ContainerComponent({
      classes: 'header__actions',
      children: [themeButton],
    });

    this.setChildren([logo, nav, actions]);
  }
}
