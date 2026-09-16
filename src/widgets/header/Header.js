import {
  ContainerComponent,
  LinkComponent,
  ButtonComponent,
} from '../../shared/component-kit';

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
    const logo = new LinkComponent({
      content: 'Dev Store',
      href: '/',
    });

    const homeLink = new LinkComponent({
      content: 'Home',
      href: '/',
    });

    const catalogLink = new LinkComponent({
      content: 'Catalog',
      href: '/catalog',
    });

    const nav = new ContainerComponent({
      tag: 'nav',
      classes: 'header__nav',
      children: [homeLink, catalogLink],
    });

    const themeButton = new ButtonComponent({
      content: 'Dark mode',
      listeners: {
        click: () => {
          document.documentElement.classList.toggle('dark-theme');

          themeButton.setContent(
            document.documentElement.classList.contains('dark-theme')
              ? 'Light mode'
              : 'Dark mode',
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
