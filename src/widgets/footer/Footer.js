import styles from './Footer.module.css';

import {
  ContainerComponent,
  TextComponent,
  LinkComponent,
} from '../../shared/component-kit';

export default class Footer extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'footer',
      id: 'footer',
      classes: styles.footer,
      ...rest,
    });

    this.render();
  }

  render() {
    const project = new ContainerComponent({
      classes: styles.footer__column,
      children: [
        new TextComponent({
          tag: 'h2',
          content: '</> Dev Store',
        }),
        new TextComponent({
          content: 'Reusable tools for frontend development.',
        }),
      ],
    });

    const links = new ContainerComponent({
      classes: styles.footer__column,
      children: [
        new TextComponent({
          tag: 'h3',
          content: 'Links',
        }),
        new LinkComponent({
          content: 'RS School',
          href: 'https://rs.school/',
          target: '_blank',
          rel: 'noopener noreferrer',
        }),
      ],
    });

    const contact = new ContainerComponent({
      classes: styles.footer__column,
      children: [
        new TextComponent({
          tag: 'h3',
          content: 'Contact',
        }),
        new LinkComponent({
          content: 'GitHub',
          href: 'https://github.com/Peccopa',
          target: '_blank',
          rel: 'noopener noreferrer',
        }),
      ],
    });

    const copyright = new TextComponent({
      content: '© 2026 Dev Store · RS School Fullstack Engineering',
      classes: styles.footer__copyright,
    });

    this.setChildren([
      new ContainerComponent({
        classes: styles.footer__content,
        children: [project, links, contact],
      }),
      copyright,
    ]);
  }
}
