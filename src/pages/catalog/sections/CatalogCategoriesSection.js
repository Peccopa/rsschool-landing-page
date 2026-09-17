import {
  ContainerComponent,
  ButtonComponent,
} from '../../../shared/component-kit';

import { categories } from '../../../entities/tool/model/tools';

import styles from './CatalogCategoriesSection.module.css';

export default class CatalogCategoriesSection extends ContainerComponent {
  currentCategory = 'All';
  buttons = [];

  constructor({ onCategoryChange, ...rest } = {}) {
    super({
      tag: 'section',
      id: 'catalog-categories',
      classes: styles['catalog-categories'],
      ...rest,
    });

    this.onCategoryChange = onCategoryChange;

    this.render();
  }

  render() {
    this.buttons = categories.map((category) => {
      const button = new ButtonComponent({
        content: category,
        listeners: {
          click: () => {
            this.setActiveCategory(category);
            this.onCategoryChange?.(category);
          },
        },
      });

      if (category === this.currentCategory) {
        button.setClasses(styles.active);
      }

      return button;
    });

    const controls = new ContainerComponent({
      classes: styles['catalog-categories__controls'],
      children: this.buttons,
    });

    this.setChildren([controls]);
  }

  setActiveCategory(category) {
    this.currentCategory = category;

    this.buttons.forEach((button, index) => {
      button.toggleClasses(styles.active, categories[index] === category);
    });
  }
}
