import {
  ContainerComponent,
  ButtonComponent,
  LinkComponent,
  TextComponent,
} from '../../../shared/component-kit';

import styles from './ToolModal.module.css';

export default class ToolModal extends ContainerComponent {
  constructor({ tool, ...rest } = {}) {
    super({
      tag: 'div',
      classes: styles.modal,
      attributes: {
        role: 'dialog',
        'aria-modal': 'true',
      },
      ...rest,
    });

    this.tool = tool;

    this.render();
    this.close();

    this.handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    };

    document.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const overlay = new ContainerComponent({
      classes: styles.modal__overlay,
      listeners: {
        click: (event) => {
          if (event.target === overlay.element) {
            this.close();
          }
        },
      },
    });

    const closeButton = new ButtonComponent({
      content: '×',
      classes: styles.modal__close,
      attributes: {
        type: 'button',
        'aria-label': 'Close modal',
      },
      listeners: {
        click: () => {
          this.close();
        },
      },
    });

    const parameters = this.tool.parameters
      ? [
          this.createParameter(this.tool.parameters.environment),
          this.createParameter(this.tool.parameters.scope),
        ]
      : [];

    const content = new ContainerComponent({
      classes: styles.modal__content,
      listeners: {
        click: (event) => {
          event.stopPropagation();
        },
      },
      children: [
        closeButton,

        ...parameters,

        new TextComponent({
          tag: 'h2',
          content: this.tool.name,
        }),

        new TextComponent({
          content: this.tool.description,
        }),

        new TextComponent({
          content: `${this.tool.category} · ${this.tool.status}`,
          classes: styles.modal__meta,
        }),

        new LinkComponent({
          content: 'Repository',
          href: this.tool.repository,
          attributes: {
            target: '_blank',
            rel: 'noopener noreferrer',
          },
        }),
      ],
    });

    overlay.appendChildren([content]);

    this.setChildren([overlay]);
  }

  createParameter(parameter) {
    const selectedOption =
      parameter.options.find(
        (option) => option.value === parameter.defaultValue,
      ) ?? parameter.options[0];

    const info = new TextComponent({
      content: selectedOption.info,
      classes: styles.modal__parameter_info,
    });

    const options = parameter.options.map(
      (option) =>
        new ButtonComponent({
          content: option.label,
          classes:
            option.value === selectedOption.value
              ? styles['modal__parameter_option--active']
              : styles.modal__parameter_option,
          attributes: {
            type: 'button',
          },
          listeners: {
            click: () => {
              info.setContent(option.info);

              options.forEach((button, index) => {
                button.replaceClasses(
                  styles['modal__parameter_option--active'],
                  styles.modal__parameter_option,
                );

                if (parameter.options[index].value === option.value) {
                  button.replaceClasses(
                    styles.modal__parameter_option,
                    styles['modal__parameter_option--active'],
                  );
                }
              });
            },
          },
        }),
    );

    return new ContainerComponent({
      classes: styles.modal__parameter,
      children: [
        new TextComponent({
          tag: 'h3',
          content: parameter.label,
        }),
        new ContainerComponent({
          classes: styles.modal__parameter_options,
          children: options,
        }),
        info,
      ],
    });
  }

  open() {
    this.show(false);
    document.body.classList.add('overflow-hidden');
  }

  close() {
    this.hide(false);
    document.body.classList.remove('overflow-hidden');
  }

  destroy() {
    document.removeEventListener('keydown', this.handleKeyDown);

    super.destroy();
  }
}
