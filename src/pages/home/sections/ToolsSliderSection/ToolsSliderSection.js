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
  track;
  description;
  playButton;

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

    const viewport = new ContainerComponent({
      classes: styles['tools-slider__viewport'],
    });

    this.track = new ContainerComponent({
      classes: styles['tools-slider__track'],
    });

    const slides = tools.map((tool) => {
      const image = new ImageComponent({
        source: tool.image,
        alt: `${tool.name} cover`,
      });

      return new LinkComponent({
        classes: styles['tools-slider__slide'],
        href: tool.repository,
        target: '_blank',
        rel: 'noopener noreferrer',
        children: [image],
      });
    });

    this.track.setChildren(slides);
    viewport.setChildren([this.track]);

    const previousButton = new ButtonComponent({
      content: 'Previous',
      classes: styles['tools-button'],
      listeners: {
        click: () => {
          this.pauseAutoPlay();
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
          this.pauseAutoPlay();
          this.showNext();
        },
      },
    });

    const controls = new ContainerComponent({
      classes: styles['tools-slider__controls'],
      children: [previousButton, playButton, nextButton],
    });

    this.setChildren([title, viewport, this.description, controls]);

    this.playButton = playButton;

    this.update();
  }

  update() {
    this.track.setStyle({
      transform: `translateX(-${this.currentIndex * 100}%)`,
    });

    this.description.setContent(tools[this.currentIndex].description);
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
    }, 1500);
  }

  stopAutoPlay() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  toggleAutoPlay() {
    if (this.isPlaying) {
      this.pauseAutoPlay();
      return;
    }

    this.isPlaying = true;
    this.startAutoPlay();
    this.playButton.setContent('Pause');
  }

  pauseAutoPlay() {
    this.stopAutoPlay();
    this.isPlaying = false;
    this.playButton.setContent('Play');
  }
}
