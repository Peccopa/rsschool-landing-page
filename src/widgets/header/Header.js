import { ContainerComponent, TextComponent } from '../../shared/component-kit';

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
    const logo = new TextComponent({
      tag: 'a',
      content: 'Dev Store',
      attributes: { href: '/' },
    });

    const homeLink = new TextComponent({
      tag: 'a',
      content: 'Home',
      attributes: { href: '/' },
    });

    const catalogLink = new TextComponent({
      tag: 'a',
      content: 'Catalog',
      attributes: { href: '/catalog' },
    });

    const nav = new ContainerComponent({
      tag: 'nav',
      classes: 'header__nav',
      children: [homeLink, catalogLink],
    });

    this.setChildren([logo, nav]);
  }
}
