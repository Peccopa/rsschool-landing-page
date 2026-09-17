import {
  ContainerComponent,
  TextComponent,
} from '../../../shared/component-kit';

import styles from './CatalogHeaderSection.module.css';

export default class CatalogHeaderSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'catalog-header',
      classes: styles['catalog-header'],
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

    const meta = new TextComponent({
      content: '11 tools · 3 categories',
    });

    this.setChildren([title, description, meta]);
  }
}
