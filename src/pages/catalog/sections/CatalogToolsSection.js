import {
  ContainerComponent,
  TextComponent,
  ButtonComponent,
} from '../../../shared/component-kit';

import { tools } from '../../../entities/tool/model/tools';

export default class CatalogToolsSection extends ContainerComponent {
  currentLimit = 4;
  currentCategory = 'All';

  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'catalog-tools',
      classes: 'catalog-tools',
      ...rest,
    });

    this.render();
  }

  render(category = this.currentCategory) {
    this.currentCategory = category;
    this.currentLimit = 4;

    this.update();
  }

  update() {
    const filteredTools =
      this.currentCategory === 'All'
        ? tools
        : tools.filter((tool) => tool.category === this.currentCategory);

    const visibleTools = filteredTools.slice(0, this.currentLimit);

    const cards = visibleTools.map(
      (tool) =>
        new ContainerComponent({
          classes: 'tool-card',
          children: [
            new TextComponent({
              tag: 'h2',
              content: tool.name,
            }),
            new TextComponent({
              content: tool.description,
            }),
            new TextComponent({
              content: `Category: ${tool.category}`,
            }),
            new TextComponent({
              content: `Status: ${tool.status}`,
            }),
          ],
        }),
    );

    this.setChildren(cards);

    if (this.currentLimit < filteredTools.length) {
      this.addShowMoreButton();
    }
  }

  addShowMoreButton() {
    const button = new ButtonComponent({
      content: 'Show More',
      listeners: {
        click: () => {
          this.currentLimit += 4;
          this.update();
        },
      },
    });

    this.appendChildren([button]);
  }
}
