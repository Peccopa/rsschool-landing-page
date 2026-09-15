import {
  ContainerComponent,
  TextComponent,
} from '../../../shared/component-kit';

export default class WhySection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'why',
      classes: 'why',
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'Why Dev Store?',
    });

    const description = new TextComponent({
      content:
        'Reusable tools help reduce repetitive work and keep projects consistent.',
    });

    this.setChildren([title, description]);
  }
}
