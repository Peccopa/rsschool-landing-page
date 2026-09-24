import styles from './ToolCard.module.css';

import {
  ContainerComponent,
  ImageComponent,
  TextComponent,
} from '../../../shared/component-kit';

export default class ToolCard extends ContainerComponent {
  constructor({ tool, onClick, ...rest } = {}) {
    super({
      tag: 'article',
      classes: styles['tool-card'],
      listeners: {
        click: () => {
          onClick?.(tool);
        },
      },
      ...rest,
    });

    this.tool = tool;
    this.render();
  }

  render() {
    const image = new ImageComponent({
      source: this.tool.image,
      alt: `${this.tool.name} cover`,
      classes: styles['tool-card__image'],
    });

    const content = new ContainerComponent({
      classes: styles['tool-card__content'],
      children: [
        new TextComponent({
          tag: 'h2',
          content: this.tool.name,
        }),
        new TextComponent({
          content: this.tool.description,
        }),
        new TextComponent({
          content: `${this.tool.category} · ${this.tool.status}`,
          classes: styles['tool-card__meta'],
        }),
      ],
    });

    this.setChildren([image, content]);
  }
}
