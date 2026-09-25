import { ButtonComponent } from '../../../shared/component-kit';
import styles from './ThemeSwitcher.module.css';

export default class ThemeSwitcher extends ButtonComponent {
  constructor({ ...rest } = {}) {
    super({
      content: '☾',
      classes: styles.button,
      attributes: {
        'aria-label': 'Switch theme',
        type: 'button',
      },
      ...rest,
    });
  }
}
