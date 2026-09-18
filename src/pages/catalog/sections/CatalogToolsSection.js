import {
  ContainerComponent,
  ButtonComponent,
} from '../../../shared/component-kit';

import ToolCard from '../../../entities/tool/ui/ToolCard';

import { tools } from '../../../entities/tool/model/tools';

import styles from './CatalogToolsSection.module.css';

export default class CatalogToolsSection extends ContainerComponent {
  currentLimit = 8;

  currentCategory = 'All';

  constructor({ ...rest } = {}) {
    super({
      id: 'catalog-tools',
      classes: styles['catalog-tools'],
      ...rest,
    });

    this.render();
  }

  render(category = this.currentCategory) {
    this.currentCategory = category;
    this.currentLimit = 8;
    this.update();
  }

  update() {
    const filteredTools =
      this.currentCategory === 'All'
        ? tools
        : tools.filter((tool) => tool.category === this.currentCategory);

    const visibleTools = filteredTools.slice(0, this.currentLimit);

    const cards = new ContainerComponent({
      classes: styles['catalog-tools__list'],
      children: visibleTools.map(
        (tool) =>
          new ToolCard({
            tool,
          }),
      ),
    });

    this.setChildren([cards]);

    if (this.currentLimit < filteredTools.length) {
      this.addShowMoreButton();
    }
  }

  addShowMoreButton() {
    const button = new ButtonComponent({
      content: 'Show More',
      classes: styles['catalog-tools__show-more'],
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
