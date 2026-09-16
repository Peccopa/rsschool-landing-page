import { ContainerComponent } from '../../shared/component-kit';

import CatalogHeaderSection from './sections/CatalogHeaderSection';

export default class CatalogPage extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      id: 'catalog-page',
      classes: 'catalog-page',
      ...rest,
    });

    this.render();
  }

  render() {
    const main = new ContainerComponent({
      tag: 'main',
      classes: 'main',
      children: [new CatalogHeaderSection()],
    });

    this.setChildren([main]);
  }
}
