import { ContainerComponent, LinkComponent } from '../../shared/component-kit';
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
  }
}
