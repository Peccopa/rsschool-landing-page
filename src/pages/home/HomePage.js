import { ContainerComponent } from '../../shared/component-kit';

import HeroSection from './sections/HeroSection/HeroSection';
import FeaturedToolsSection from './sections/FeaturedToolsSection/FeaturedToolsSection';
import WhySection from './sections/WhySection/WhySection';
import ToolsSliderSection from './sections/ToolsSliderSection/ToolsSliderSection';
import AboutSection from './sections/AboutSection/AboutSection';
import CtaSection from './sections/CtaSection/CtaSection';

export default class HomePage extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'main',
      id: 'home-page',
      classes: ['main', 'home-page'],
      ...rest,
    });

    this.render();
  }

  render() {
    this.setChildren([
      new HeroSection(),
      new FeaturedToolsSection(),
      new WhySection(),
      new ToolsSliderSection(),
      new AboutSection(),
      new CtaSection(),
    ]);
  }
}
