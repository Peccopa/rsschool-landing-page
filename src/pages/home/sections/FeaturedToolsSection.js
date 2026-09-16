import styles from './FeaturedToolsSection.module.css';

import {
  ContainerComponent,
  TextComponent,
} from '../../../shared/component-kit';

import { tools } from '../../../entities/tool/model/tools';

export default class FeaturedToolsSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'featured-tools',
      classes: styles['featured-tools'],
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'Featured Tools',
    });

    const cards = new ContainerComponent({
      classes: styles['featured-tools__list'],
    });

    tools.forEach((tool) => {
      const card = new ContainerComponent({
        classes: styles['tool-card'],
        children: [
          new TextComponent({
            tag: 'h3',
            content: tool.name,
          }),
          new TextComponent({
            content: tool.description,
          }),
          new TextComponent({
            content: tool.status,
          }),
        ],
      });

      cards.appendChildren([card]);
    });

    this.setChildren([title, cards]);
  }
}
