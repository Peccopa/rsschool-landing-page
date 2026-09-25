import { ContainerComponent } from '../../shared/component-kit';

import Logo from '../logo/Logo';
import Navigation from '../navigation/Navigation';
import HeaderActions from '../header-actions/HeaderActions';
import Burger from '../burger/Burger';

import styles from './Header.module.css';

export default class Header extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      tag: 'header',
      id: 'header',
      classes: styles.header,
      ...rest,
    });

    this.render();
  }

  render() {
    const logo = new Logo();
    const navigation = new Navigation();
    const actions = new HeaderActions();
    const burger = new Burger();

    this.setChildren([logo, navigation, actions, burger]);
  }
}
