import styles from './Logo.module.css';

import { LinkComponent } from '../../shared/component-kit';

export default class Logo extends LinkComponent {
  constructor({ ...rest } = {}) {
    super({
      content: '</> Dev Store',
      href: '/',
      classes: styles.logo,
      ...rest,
    });
  }
}
