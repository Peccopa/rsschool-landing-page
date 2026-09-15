import {
  ContainerComponent,
  TextComponent,
  LinkComponent,
} from '../../../shared/component-kit';

export default class HeroSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'hero',
      classes: 'hero',
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
      content: 'A collection of reusable tools for modern web development.',
    });

    const link = new LinkComponent({
      content: 'Explore tools',
      href: '/catalog',
    });

    this.setChildren([title, description, link]);
  }
}
