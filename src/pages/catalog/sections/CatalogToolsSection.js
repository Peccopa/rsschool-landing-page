import {
  ContainerComponent,
  ButtonComponent,
} from '../../../shared/component-kit';

import ToolCard from '../../../entities/tool/ui/ToolCard';
import ToolModal from '../../../entities/tool/ui/ToolModal';

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

    this.showMoreButton = null;
    this.cardsList = null;
    this.modal = null;
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

    this.cardsList = new ContainerComponent({
      classes: styles['catalog-tools__list'],
      children: visibleTools.map((tool, index) => {
        const card = new ToolCard({
          tool,
          onClick: (selectedTool) => {
            this.openModal(selectedTool);
          },
        });

        card.setStyle({
          animationDelay: `${index * 0.07}s`,
        });

        return card;
      }),
    });

    this.setChildren([this.cardsList]);

    if (this.currentLimit < filteredTools.length) {
      this.addShowMoreButton();
    }
  }

  addShowMoreButton() {
    this.showMoreButton = new ButtonComponent({
      content: 'Show More',
      classes: styles['catalog-tools__show-more'],
      listeners: {
        click: () => {
          this.showMore();
        },
      },
    });

    this.appendChildren([this.showMoreButton]);
  }

  showMore() {
    const filteredTools =
      this.currentCategory === 'All'
        ? tools
        : tools.filter((tool) => tool.category === this.currentCategory);

    const nextTools = filteredTools.slice(
      this.currentLimit,
      this.currentLimit + 4,
    );

    const newCards = nextTools.map((tool, index) => {
      const card = new ToolCard({
        tool,
        onClick: (selectedTool) => {
          this.openModal(selectedTool);
        },
      });

      card.setStyle({
        animationDelay: `${index * 0.07}s`,
      });

      return card;
    });

    this.cardsList.appendChildren(newCards);

    this.currentLimit += nextTools.length;

    if (this.currentLimit >= filteredTools.length) {
      this.showMoreButton?.destroy();
      this.showMoreButton = null;
    }
  }

  openModal(tool) {
    this.modal?.destroy();

    this.modal = new ToolModal({
      tool,
    });

    this.appendChildren([this.modal]);

    this.modal.open();
  }
}
