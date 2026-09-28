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
  isTransitioning;

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
    this.isTransitioning = false;

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

    const createSlide = (tool) => {
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
    };

    const slides = [
      createSlide(tools[tools.length - 1]),
      ...tools.map(createSlide),
      createSlide(tools[0]),
    ];

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
    this.currentIndex = 1;
    this.update();
  }

  update() {
    this.track.setStyle({
      transform: `translateX(-${this.currentIndex * 100}%)`,
    });

    const toolIndex = (this.currentIndex - 1 + tools.length) % tools.length;

    this.description.setContent(tools[toolIndex].description);
  }

  showNext() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex += 1;

    this.update();

    this.track.element.addEventListener(
      'transitionend',
      () => {
        if (this.currentIndex === tools.length + 1) {
          this.track.setStyle({
            transition: 'none',
            transform: 'translateX(-100%)',
          });

          this.currentIndex = 1;

          requestAnimationFrame(() => {
            this.track.setStyle({
              transition: 'transform 0.4s ease-in-out',
            });

            this.isTransitioning = false;
          });

          return;
        }

        this.isTransitioning = false;
      },
      { once: true },
    );
  }

  showPrevious() {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex -= 1;

    this.update();

    this.track.element.addEventListener(
      'transitionend',
      () => {
        if (this.currentIndex === 0) {
          this.track.setStyle({
            transition: 'none',
            transform: `translateX(-${tools.length * 100}%)`,
          });

          this.currentIndex = tools.length;

          requestAnimationFrame(() => {
            this.track.setStyle({
              transition: 'transform 0.4s ease-in-out',
            });

            this.isTransitioning = false;
          });

          return;
        }

        this.isTransitioning = false;
      },
      { once: true },
    );
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
