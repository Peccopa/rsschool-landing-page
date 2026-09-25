import { ContainerComponent } from '../../shared/component-kit';

import ThemeSwitcher from './theme-switcher/ThemeSwitcher';

import styles from './HeaderActions.module.css';

export default class HeaderActions extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      classes: styles.actions,
      ...rest,
    });

    this.setChildren([new ThemeSwitcher()]);
  }
}
