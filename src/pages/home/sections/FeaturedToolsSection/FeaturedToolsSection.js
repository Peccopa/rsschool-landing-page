import styles from './FeaturedToolsSection.module.css';

import componentIcon from './icons/component.svg';
import javascriptIcon from './icons/javascript.svg';
import routeIcon from './icons/route.svg';
import stateIcon from './icons/state.svg';

import {
  ContainerComponent,
  ImageComponent,
  LinkComponent,
  TextComponent,
} from '../../../../shared/component-kit';

import { tools } from '../../../../entities/tool/model/tools';

const featuredIds = [
  'component-kit',
  'state-kit',
  'router-kit',
  'js-starter-pack',
];

const icons = {
  component: componentIcon,
  state: stateIcon,
  router: routeIcon,
  javascript: javascriptIcon,
};

export default class FeaturedToolsSection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'featured-tools',
      classes: styles['featured-tools'],
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'Featured Tools',
    });

    const cards = new ContainerComponent({
      classes: styles['featured-tools__list'],
    });

    const featuredTools = tools.filter((tool) => featuredIds.includes(tool.id));

    featuredTools.forEach((tool) => {
      const heading = new ContainerComponent({
        classes: styles['tool-card__heading'],
        children: [
          new ImageComponent({
            source: icons[tool.icon],
            alt: `${tool.name} icon`,
          }),
          new TextComponent({
            tag: 'h3',
            content: tool.name,
          }),
        ],
      });

      const card = new LinkComponent({
        classes: styles['tool-card'],
        href: tool.repository,
        target: '_blank',
        rel: 'noopener noreferrer',
        children: [
          heading,
          new TextComponent({
            content: tool.description,
            classes: styles.description,
          }),
          new TextComponent({
            content: 'GitHub Repository →',
            classes: styles.github,
          }),
        ],
      });

      cards.appendChildren([card]);
    });

    this.setChildren([title, cards]);
  }
}
