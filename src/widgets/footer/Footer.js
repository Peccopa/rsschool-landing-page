import { ContainerComponent, TextComponent } from '../../shared/component-kit';

export default class Footer extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'footer',
      id: 'footer',
      classes: 'footer',
      ...rest,
    });

    this.render();
  }

  render() {
    const copyright = new TextComponent({
      content: '© 2026 Dev Store',
    });

    this.setChildren([copyright]);
  }
}
