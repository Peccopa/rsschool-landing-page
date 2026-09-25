import appState from '../../../app/state';

import { ButtonComponent } from '../../../shared/component-kit';

import { applyTheme, setTheme } from '../../../shared/theme';

import styles from './ThemeSwitcher.module.css';

export default class ThemeSwitcher extends ButtonComponent {
  constructor({ ...rest } = {}) {
    super({
      content: '',
      classes: styles.button,
      attributes: {
        'aria-label': 'Switch theme',
        type: 'button',
      },
      ...rest,
    });

    this.addListeners();

    this.unsubscribe = appState.subscribe((state) => {
      this.update(state.theme);
    });

    this.update(appState.getState().theme);
  }

  addListeners() {
    this.setListeners({
      click: () => {
        appState.dispatch({
          type: 'THEME_TOGGLE',
        });
      },
    });
  }

  update(theme) {
    applyTheme(theme);
    setTheme(theme);

    const isDark = theme === 'dark';

    this.setContent(isDark ? '☀' : '☾');

    this.setAttributes({
      'aria-label': isDark ? 'Switch to light theme' : 'Switch to dark theme',
    });
  }
}
