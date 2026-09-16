import {
  ContainerComponent,
  TextComponent,
} from '../../../shared/component-kit';

export default class CatalogHeaderSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'catalog-header',
      classes: 'catalog-header',
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h1',
      content: 'Tool Catalog',
    });

    const description = new TextComponent({
      content: 'Explore reusable tools for web development.',
    });

    this.setChildren([title, description]);
  }
}
