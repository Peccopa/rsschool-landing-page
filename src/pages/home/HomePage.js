import { ContainerComponent, TextComponent } from '../../shared/component-kit';

export default class HomePage extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      id: 'home-page',
      classes: 'home-page',
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h1',
      content: 'Dev Store',
    });

    const subtitle = new TextComponent({
      content: 'Build once. Reuse everywhere.',
    });

    const main = new ContainerComponent({
      tag: 'main',
      classes: 'main',
      children: [title, subtitle],
    });

    this.appendChildren([main]);
  }
}
