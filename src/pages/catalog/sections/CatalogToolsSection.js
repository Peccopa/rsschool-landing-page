import {
  ContainerComponent,
  TextComponent,
} from '../../../shared/component-kit';

import { tools } from '../../../entities/tool/model/tools';

export default class CatalogToolsSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'catalog-tools',
      classes: 'catalog-tools',
      ...rest,
    });

    this.render();
  }

  render(category = 'All') {
    const filteredTools =
      category === 'All'
        ? tools
        : tools.filter((tool) => tool.category === category);

    const cards = filteredTools.map(
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
  }
}
