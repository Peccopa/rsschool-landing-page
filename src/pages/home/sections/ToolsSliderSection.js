import {
  ContainerComponent,
  TextComponent,
  ButtonComponent,
} from '../../../shared/component-kit';

import { tools } from '../../../entities/tool/model/tools';

export default class ToolsSliderSection extends ContainerComponent {
  content;

  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'tools-slider',
      classes: 'tools-slider',
      ...rest,
    });

    this.currentIndex = 0;

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'Featured Tools',
    });

    this.content = new TextComponent({
      tag: 'p',
      content: '',
    });

    const previousButton = new ButtonComponent({
      content: 'Previous',
      listeners: {
        click: () => {
          this.showPrevious();
        },
      },
    });

    const nextButton = new ButtonComponent({
      content: 'Next',
      listeners: {
        click: () => {
          this.showNext();
        },
      },
    });

    const controls = new ContainerComponent({
      classes: 'tools-slider__controls',
      children: [previousButton, nextButton],
    });

    this.setChildren([title, this.content, controls]);

    this.update();
  }

  update() {
    const tool = tools[this.currentIndex];
    this.content.setContent(`${tool.name}: ${tool.description}`);
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % tools.length;
    this.update();
  }

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + tools.length) % tools.length;
    this.update();
  }
}
