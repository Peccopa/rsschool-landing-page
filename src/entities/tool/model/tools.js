export const categories = ['All', 'Core', 'UI', 'Utilities'];

export const tools = [
  {
    id: 'component-kit',
    name: 'Component Kit',
    category: 'Core',
    status: 'Available',
    description:
      'Reusable components and managers for building interfaces with vanilla JavaScript.',
    repository: 'https://github.com/Peccopa/component-kit',
    image: '/rsschool-landing-page/images/component-kit.webp',
    icon: 'component',

    parameters: {
      environment: {
        label: 'Environment',
        options: [
          {
            value: 'javascript',
            label: 'JavaScript',
            info: 'Use the kit in JavaScript projects.',
          },
          {
            value: 'typescript',
            label: 'TypeScript',
            info: 'Use the kit in TypeScript projects.',
          },
        ],
      },

      scope: {
        label: 'Scope',
        options: [
          {
            value: 'components',
            label: 'Components',
            info: 'Use reusable UI components.',
          },
          {
            value: 'managers',
            label: 'Managers',
            info: 'Use DOM, events and other managers.',
          },
        ],
      },
    },
  },
  {
    id: 'state-kit',
    name: 'State Kit',
    category: 'Core',
    status: 'Available',
    description:
      'Lightweight state management with reducers, middleware and subscriptions.',
    repository: 'https://github.com/Peccopa/state-kit',
    image: '/rsschool-landing-page/images/state-kit.webp',
    icon: 'state',

    parameters: {
      state: {
        label: 'State',
        options: [
          {
            value: 'object',
            label: 'Object',
            info: 'Manage application state as a structured object.',
          },
          {
            value: 'primitive',
            label: 'Primitive',
            info: 'Manage simple primitive state values.',
          },
        ],
      },

      updates: {
        label: 'Updates',
        options: [
          {
            value: 'reducer',
            label: 'Reducer',
            info: 'Update state through reducer functions.',
          },
          {
            value: 'middleware',
            label: 'Middleware',
            info: 'Process actions through middleware before state updates.',
          },
        ],
      },
    },
  },
  {
    id: 'router-kit',
    name: 'Router Kit',
    category: 'Core',
    status: 'Available',
    description: 'Simple client-side routing for JavaScript applications.',
    repository: 'https://github.com/Peccopa/router-kit',
    image: '/rsschool-landing-page/images/router-kit.webp',
    icon: 'router',

    parameters: {
      routes: {
        label: 'Routes',
        options: [
          {
            value: 'static',
            label: 'Static',
            info: 'Match predefined application routes.',
          },
          {
            value: 'dynamic',
            label: 'Dynamic',
            info: 'Match routes containing dynamic parameters.',
          },
        ],
      },

      navigation: {
        label: 'Navigation',
        options: [
          {
            value: 'links',
            label: 'Links',
            info: 'Handle navigation through internal application links.',
          },
          {
            value: 'programmatic',
            label: 'Programmatic',
            info: 'Control navigation from application code.',
          },
        ],
      },
    },
  },
  {
    id: 'sound-kit',
    name: 'Sound Kit',
    category: 'Core',
    status: 'Available',
    description: 'Reusable sound and audio utilities for web applications.',
    repository: 'https://github.com/Peccopa',
    image: '/rsschool-landing-page/images/sound-kit.webp',
    icon: 'sound',

    parameters: {
      playback: {
        label: 'Playback',
        options: [
          {
            value: 'once',
            label: 'Once',
            info: 'Play a sound once.',
          },
          {
            value: 'loop',
            label: 'Loop',
            info: 'Repeat a sound continuously.',
          },
        ],
      },

      volume: {
        label: 'Volume',
        options: [
          {
            value: 'normal',
            label: 'Normal',
            info: 'Play sounds at the default volume.',
          },
          {
            value: 'muted',
            label: 'Muted',
            info: 'Keep sound output muted.',
          },
        ],
      },
    },
  },
  {
    id: 'i18n-kit',
    name: 'i18n Kit',
    category: 'Core',
    status: 'Available',
    description: 'Simple internationalization utilities for web projects.',
    repository: 'https://github.com/Peccopa',
    image: '/rsschool-landing-page/images/i18n-kit.webp',
    icon: 'i18n',

    parameters: {
      locale: {
        label: 'Locale',
        options: [
          {
            value: 'en',
            label: 'English',
            info: 'Use English as the active locale.',
          },
          {
            value: 'ru',
            label: 'Russian',
            info: 'Use Russian as the active locale.',
          },
        ],
      },

      fallback: {
        label: 'Fallback',
        options: [
          {
            value: 'enabled',
            label: 'Enabled',
            info: 'Use a fallback locale when a translation is missing.',
          },
          {
            value: 'disabled',
            label: 'Disabled',
            info: 'Do not use a fallback locale.',
          },
        ],
      },
    },
  },
  {
    id: 'js-starter-pack',
    name: 'JS Starter Pack',
    category: 'Core',
    status: 'Available',
    description: 'A ready-to-use JavaScript project foundation.',
    repository: 'https://github.com/Peccopa/js-starter-pack',
    image: '/rsschool-landing-page/images/js-starter-pack.webp',
    icon: 'javascript',

    parameters: {
      environment: {
        label: 'Environment',
        options: [
          {
            value: 'browser',
            label: 'Browser',
            info: 'Use the starter for browser-based applications.',
          },
          {
            value: 'node',
            label: 'Node.js',
            info: 'Use the starter for Node.js applications.',
          },
        ],
      },

      testing: {
        label: 'Testing',
        options: [
          {
            value: 'vitest',
            label: 'Vitest',
            info: 'Use Vitest for unit and integration testing.',
          },
          {
            value: 'none',
            label: 'None',
            info: 'Start the project without a testing setup.',
          },
        ],
      },
    },
  },
  {
    id: 'ts-starter-pack',
    name: 'TS Starter Pack',
    category: 'Core',
    status: 'Available',
    description: 'A ready-to-use TypeScript project foundation.',
    repository: 'https://github.com/Peccopa/ts-starter-pack',
    image: '/rsschool-landing-page/images/ts-starter-pack.webp',
    icon: 'typescript',

    parameters: {
      environment: {
        label: 'Environment',
        options: [
          {
            value: 'browser',
            label: 'Browser',
            info: 'Use the starter for browser-based applications.',
          },
          {
            value: 'node',
            label: 'Node.js',
            info: 'Use the starter for Node.js applications.',
          },
        ],
      },

      testing: {
        label: 'Testing',
        options: [
          {
            value: 'vitest',
            label: 'Vitest',
            info: 'Use Vitest for unit and integration testing.',
          },
          {
            value: 'none',
            label: 'None',
            info: 'Start the project without a testing setup.',
          },
        ],
      },
    },
  },
  {
    id: 'ui-kit',
    name: 'UI Kit',
    category: 'UI',
    status: 'In development',
    description: 'Reusable interface components for web projects.',
    repository: 'https://github.com/Peccopa',
    image: '/rsschool-landing-page/images/ui-kit.webp',
    icon: 'ui',

    parameters: {
      component: {
        label: 'Component',
        options: [
          {
            value: 'button',
            label: 'Button',
            info: 'Build reusable button interface components.',
          },
          {
            value: 'card',
            label: 'Card',
            info: 'Build reusable card interface components.',
          },
        ],
      },

      layout: {
        label: 'Layout',
        options: [
          {
            value: 'flex',
            label: 'Flex',
            info: 'Use flexible layouts for interface elements.',
          },
          {
            value: 'grid',
            label: 'Grid',
            info: 'Use grid layouts for interface elements.',
          },
        ],
      },
    },
  },
  {
    id: 'style-kit',
    name: 'Style Kit',
    category: 'Core',
    status: 'Planned',
    description: 'Reusable styling utilities for web projects.',
    repository: 'https://github.com/Peccopa',
    image: '/rsschool-landing-page/images/style-kit.webp',
    icon: 'style',

    parameters: {
      styles: {
        label: 'Styles',
        options: [
          {
            value: 'global',
            label: 'Global',
            info: 'Define styles shared across the application.',
          },
          {
            value: 'component',
            label: 'Component',
            info: 'Define styles for individual components.',
          },
        ],
      },

      approach: {
        label: 'Approach',
        options: [
          {
            value: 'utility',
            label: 'Utility',
            info: 'Apply reusable utility styles.',
          },
          {
            value: 'token',
            label: 'Token',
            info: 'Use reusable design values in styles.',
          },
        ],
      },
    },
  },
  {
    id: 'modal-kit',
    name: 'Modal Kit',
    category: 'UI',
    status: 'Planned',
    description:
      'Reusable modal, dialog and overlay components for web projects.',
    repository: 'https://github.com/Peccopa',
    image: '/rsschool-landing-page/images/modal-kit.webp',
    icon: 'modal',

    parameters: {
      position: {
        label: 'Position',
        options: [
          {
            value: 'center',
            label: 'Center',
            info: 'Display the modal in the center of the viewport.',
          },
          {
            value: 'edge',
            label: 'Edge',
            info: 'Display the modal aligned to the edge of the viewport.',
          },
        ],
      },

      closing: {
        label: 'Closing',
        options: [
          {
            value: 'overlay',
            label: 'Overlay',
            info: 'Allow closing the modal by clicking the overlay.',
          },
          {
            value: 'escape',
            label: 'Escape',
            info: 'Allow closing the modal with the Escape key.',
          },
        ],
      },
    },
  },
  {
    id: 'format-kit',
    name: 'Format Kit',
    category: 'Utilities',
    status: 'Planned',
    description:
      'Reusable utilities for formatting dates, numbers, strings and common data types.',
    repository: 'https://github.com/Peccopa',
    image: '/rsschool-landing-page/images/format-kit.webp',
    icon: 'format',

    parameters: {
      type: {
        label: 'Type',
        options: [
          {
            value: 'date',
            label: 'Date',
            info: 'Format date and time values.',
          },
          {
            value: 'number',
            label: 'Number',
            info: 'Format numeric values.',
          },
        ],
      },

      output: {
        label: 'Output',
        options: [
          {
            value: 'short',
            label: 'Short',
            info: 'Use a compact formatted representation.',
          },
          {
            value: 'long',
            label: 'Long',
            info: 'Use a more detailed formatted representation.',
          },
        ],
      },
    },
  },
];
