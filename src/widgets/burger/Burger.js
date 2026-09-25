import {
  ButtonComponent,
  ContainerComponent,
} from '../../shared/component-kit';

import styles from './Burger.module.css';

export default class Burger extends ButtonComponent {
  constructor({ ...rest } = {}) {
    super({
      content: '',
      classes: styles.burger,
      attributes: {
        'aria-label': 'Open menu',
        'aria-expanded': 'false',
        'aria-controls': 'header-nav',
        type: 'button',
      },
      ...rest,
    });

    this.setChildren([
      new ContainerComponent({
        tag: 'span',
        classes: styles.lines,
        children: [
          new ContainerComponent({
            tag: 'span',
            classes: styles.line,
          }),
          new ContainerComponent({
            tag: 'span',
            classes: styles.line,
          }),
          new ContainerComponent({
            tag: 'span',
            classes: styles.line,
          }),
        ],
      }),
    ]);
  }
}
