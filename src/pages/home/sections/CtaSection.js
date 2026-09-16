import {
  ContainerComponent,
  TextComponent,
  LinkComponent,
} from '../../../shared/component-kit';

export default class CtaSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'cta',
      classes: 'cta',
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'Ready to explore?',
    });

    const description = new TextComponent({
      content:
        'Browse the catalog and find reusable tools for your next project.',
    });

    const link = new LinkComponent({
      content: 'Open catalog',
      href: '/catalog',
    });

    this.setChildren([title, description, link]);
  }
}
