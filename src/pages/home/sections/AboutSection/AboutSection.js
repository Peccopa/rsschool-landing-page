import styles from './AboutSection.module.css';

import {
  ContainerComponent,
  TextComponent,
} from '../../../../shared/component-kit';

export default class AboutSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'about',
      classes: styles.about,
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'About Dev Store',
    });

    const content = new ContainerComponent({
      classes: styles.about__content,
      children: [
        new TextComponent({
          content:
            'Dev Store is a personal collection of reusable tools created while learning and building frontend applications. The project brings together small libraries, utilities and starter templates that solve recurring development tasks.',
        }),
        new TextComponent({
          content:
            'The collection grows alongside real projects. Tools are extracted, improved and reused when they prove useful, turning individual solutions into a growing set of development building blocks.',
        }),
      ],
    });

    this.setChildren([title, content]);
  }
}
