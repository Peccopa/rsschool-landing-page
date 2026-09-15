import { ContainerComponent, TextComponent } from '../../shared/component-kit';

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
    const title = new TextComponent({
      tag: 'h1',
      content: 'Catalog',
    });

    const main = new ContainerComponent({
      tag: 'main',
      classes: 'main',
      children: [title],
    });

    this.appendChildren([main]);
  }
}
