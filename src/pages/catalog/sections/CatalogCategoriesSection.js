import {
  ContainerComponent,
  ButtonComponent,
} from '../../../shared/component-kit';

import { categories } from '../../../entities/tool/model/tools';

export default class CatalogCategoriesSection extends ContainerComponent {
  constructor({ onCategoryChange, ...rest } = {}) {
    super({
      tag: 'section',
      id: 'catalog-categories',
      classes: 'catalog-categories',
      ...rest,
    });

    this.onCategoryChange = onCategoryChange;

    this.render();
  }

  render() {
    const buttons = categories.map(
      (category) =>
        new ButtonComponent({
          content: category,
          listeners: {
            click: () => {
              this.onCategoryChange?.(category);
            },
          },
        }),
    );

    this.setChildren(buttons);
  }
}
