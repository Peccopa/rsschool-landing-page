import { ContainerComponent } from '../../shared/component-kit';

import CatalogHeaderSection from './sections/CatalogHeaderSection';
import CatalogCategoriesSection from './sections/CatalogCategoriesSection';
import CatalogToolsSection from './sections/CatalogToolsSection';

export default class CatalogPage extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'main',
      id: 'catalog-page',
      classes: ['main', 'catalog-page'],
      ...rest,
    });

    this.render();
  }

  render() {
    const header = new CatalogHeaderSection();

    const toolsSection = new CatalogToolsSection();

    const categoriesSection = new CatalogCategoriesSection({
      onCategoryChange: (category) => {
        toolsSection.render(category);
      },
    });

    const main = new ContainerComponent({
      tag: 'main',
      classes: 'main',
      children: [header, categoriesSection, toolsSection],
    });

    this.setChildren([main]);
  }
}
