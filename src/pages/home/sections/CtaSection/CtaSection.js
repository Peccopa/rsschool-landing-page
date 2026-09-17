import styles from './CtaSection.module.css';

import {
  ContainerComponent,
  TextComponent,
  LinkComponent,
} from '../../../../shared/component-kit';

export default class CtaSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'cta',
      classes: styles.cta,
      ...rest,
    });

    this.render();
  }

  render() {
    const content = new ContainerComponent({
      classes: styles.cta__content,
      children: [
        new TextComponent({
          tag: 'h2',
          content: 'Ready to explore?',
        }),
        new TextComponent({
          content:
            'Browse the catalog and find reusable tools for your next project.',
        }),
      ],
    });

    const link = new LinkComponent({
      content: 'Open catalog',
      href: '/catalog',
      classes: styles.cta__link,
    });

    this.setChildren([content, link]);
  }
}
