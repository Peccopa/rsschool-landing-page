import { ContainerComponent } from '../shared/component-kit';

export default class App extends ContainerComponent {
  constructor({ ...rest } = {}) {
    super({
      id: 'app',
      classes: 'app',
      ...rest,
    });
  }
}
