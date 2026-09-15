import { ContainerComponent, LinkComponent } from '../../shared/component-kit';

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

    this.setChildren([logo, nav]);
  }
}
