import styles from './WhySection.module.css';

import {
  ContainerComponent,
  TextComponent,
} from '../../../../shared/component-kit';

const benefits = [
  {
    title: 'Reusable',
    description:
      'Build a tool once and reuse it across multiple projects. Each utility is designed to solve a specific problem without forcing the rest of the application to follow a particular architecture.',
  },
  {
    title: 'Consistent',
    description:
      'Keep familiar patterns, project structure and development approaches consistent. Reusable tools make it easier to move between projects without rebuilding the same foundations from scratch.',
  },
  {
    title: 'Ready to evolve',
    description:
      'The goal is not to create a huge framework. Tools start small, solve real problems and can grow when new requirements appear. This keeps the code understandable while leaving room for future improvements.',
  },
];

export default class WhySection extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'section',
      id: 'why',
      classes: styles['why'],
      ...rest,
    });

    this.render();
  }

  render() {
    const title = new TextComponent({
      tag: 'h2',
      content: 'Why Dev Store?',
    });

    const intro = new ContainerComponent({
      classes: styles['why__intro'],
      children: [
        new TextComponent({
          content:
            'Frontend development often involves solving the same problems again and again. Creating a component structure, setting up state management, configuring routing or preparing a new project can take time before the actual work even begins.',
        }),
        new TextComponent({
          content:
            'Dev Store is built around a simple idea: common solutions should be reusable. Instead of starting from an empty project every time, these tools provide small, focused building blocks that can be adapted to different projects and workflows.',
        }),
      ],
    });

    const benefitsList = new ContainerComponent({
      classes: styles['why__list'],
    });

    benefits.forEach(({ title: benefitTitle, description }) => {
      const card = new ContainerComponent({
        classes: styles['why__card'],
        children: [
          new TextComponent({
            tag: 'h3',
            content: benefitTitle,
          }),
          new TextComponent({
            content: description,
          }),
        ],
      });

      benefitsList.appendChildren([card]);
    });

    const conclusion = new TextComponent({
      content:
        'Dev Store is also a playground for experimenting with architecture, reusable components and development workflows. Some tools are already usable, others are still evolving — but every part of the collection starts with a practical purpose.',
      classes: styles['why__conclusion'],
    });

    this.setChildren([title, intro, benefitsList, conclusion]);
  }
}
