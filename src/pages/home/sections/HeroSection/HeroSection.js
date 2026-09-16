import styles from './HeroSection.module.css';

import {
  ContainerComponent,
  TextComponent,
  LinkComponent,
} from '../../../../shared/component-kit';

export default class HeroSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'hero',
      classes: styles.hero,
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h1',
      content: 'Build once. Reuse everywhere.',
    });

    const description = new TextComponent({
      content:
        'Dev Store is a collection of reusable JavaScript tools, components and project foundations for modern web development.',
    });

    const link = new LinkComponent({
      content: 'Explore the catalog',
      href: '/catalog',
    });

    this.setChildren([title, description, link]);
  }
}
