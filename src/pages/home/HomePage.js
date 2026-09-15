import { ContainerComponent } from '../../shared/component-kit';
import HeroSection from './sections/HeroSection';

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
    this.setChildren([new HeroSection()]);
  }
}
