import { ContainerComponent } from '../../shared/component-kit';

export default class Main extends ContainerComponent {
  initialized = false;

  constructor({ ...rest } = {}) {
    super({
      tag: 'main',
      id: 'main',
      classes: 'main',
      ...rest,
    });
  }

  setPage(page) {
    const currentPage = this.element.firstElementChild;

    if (currentPage?.id === page.element.id) {
      return this;
    }

    if (!this.initialized) {
      this.setChildren([page]);
      this.initialized = true;

      return this;
    }

    this.setStyle({
      opacity: '0',
    });

    setTimeout(() => {
      this.setChildren([page]);

      requestAnimationFrame(() => {
        this.setStyle({
          opacity: '1',
        });
      });
    }, 300);

    return this;
  }
}
