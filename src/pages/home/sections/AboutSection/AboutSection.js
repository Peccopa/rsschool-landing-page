import {
  ContainerComponent,
  TextComponent,
} from '../../../../shared/component-kit';

export default class AboutSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'about',
      classes: 'about',
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'About Dev Store',
    });

    const description = new TextComponent({
      content:
        'Dev Store is a collection of reusable tools created for modern web development projects.',
    });

    this.setChildren([title, description]);
  }
}
