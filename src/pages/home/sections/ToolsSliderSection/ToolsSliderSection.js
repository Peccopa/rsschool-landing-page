import styles from './ToolsSliderSection.module.css';

import {
  ContainerComponent,
  ImageComponent,
  LinkComponent,
  TextComponent,
  ButtonComponent,
} from '../../../../shared/component-kit';

import { tools } from '../../../../entities/tool/model/tools';

export default class ToolsSliderSection extends ContainerComponent {
  currentIndex;
  isPlaying;
  timer;

  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'tools-slider',
      classes: styles['tools-slider'],
      ...rest,
    });

    this.currentIndex = 0;
    this.isPlaying = true;
    this.timer = null;

    this.render();
    this.startAutoPlay();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'Explore the Tools',
    });

    this.description = new TextComponent({
      content: '',
      classes: styles['tools-slider__description'],
    });

    this.slide = new LinkComponent({
      classes: styles['tools-slider__slide'],
      target: '_blank',
      rel: 'noopener noreferrer',
    });

    this.image = new ImageComponent({
      source: '',
      alt: '',
    });

    this.slide.appendChildren([this.image]);

    const previousButton = new ButtonComponent({
      content: 'Previous',
      classes: styles['tools-button'],
      listeners: {
        click: () => {
          this.showPrevious();
        },
      },
    });

    const playButton = new ButtonComponent({
      content: 'Pause',
      classes: styles['tools-button'],
      listeners: {
        click: () => {
          this.toggleAutoPlay();
        },
      },
    });

    const nextButton = new ButtonComponent({
      content: 'Next',
      classes: styles['tools-button'],
      listeners: {
        click: () => {
          this.showNext();
        },
      },
    });

    const controls = new ContainerComponent({
      classes: styles['tools-slider__controls'],
      children: [previousButton, playButton, nextButton],
    });

    this.setChildren([title, this.slide, this.description, controls]);

    this.playButton = playButton;

    this.update();
  }

  update() {
    const tool = tools[this.currentIndex];

    this.image.setSrc(tool.image);
    this.image.setAlt(`${tool.name} cover`);
    this.slide.setHref(tool.repository);
    this.description.setContent(tool.description);
  }

  showNext() {
    this.currentIndex = (this.currentIndex + 1) % tools.length;

    this.update();
  }

  showPrevious() {
    this.currentIndex = (this.currentIndex - 1 + tools.length) % tools.length;

    this.update();
  }

  startAutoPlay() {
    this.stopAutoPlay();

    this.timer = setInterval(() => {
      if (this.isPlaying) {
        this.showNext();
      }
    }, 5000);
  }

  stopAutoPlay() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  toggleAutoPlay() {
    this.isPlaying = !this.isPlaying;

    this.playButton.setContent(this.isPlaying ? 'Pause' : 'Play');
  }
}
