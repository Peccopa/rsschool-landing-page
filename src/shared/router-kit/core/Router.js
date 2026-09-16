import { matchRoute } from '../utils/matchRoute';

export class Router {
  routes;
  listeners = [];
  started = false;

  constructor(routes, base = '') {
    this.routes = routes;
    this.base = base.replace(/\/$/, '');
  }

  getRoutePath(pathname) {
    if (!this.base) {
      return pathname;
    }

    if (pathname === this.base) {
      return '/';
    }

    if (pathname.startsWith(`${this.base}/`)) {
      return pathname.slice(this.base.length);
    }

    return undefined;
  }

  start() {
    if (this.started) return;

    this.started = true;

    window.addEventListener('popstate', this.handlePopState);
    document.addEventListener('click', this.handleClick);

    this.notify(this.getState());
  }

  stop() {
    if (!this.started) return;

    window.removeEventListener('popstate', this.handlePopState);
    document.removeEventListener('click', this.handleClick);

    this.started = false;
  }

  getRoute(path) {
    for (const [pattern, route] of Object.entries(this.routes)) {
      const match = matchRoute(pattern, path);

      if (match) {
        return {
          route,
          params: match.params,
        };
      }
    }

    return undefined;
  }

  navigate(to) {
    const url = new URL(to, window.location.origin);

    if (url.origin !== window.location.origin) return;

    const pathname = this.base
      ? `${this.base}${url.pathname === '/' ? '' : url.pathname}`
      : url.pathname;

    history.pushState({}, '', `${pathname}${url.search}${url.hash}`);

    this.notify(this.getState());
  }

  subscribe(listener) {
    this.listeners.push(listener);

    return () => {
      const index = this.listeners.indexOf(listener);

      if (index !== -1) {
        this.listeners.splice(index, 1);
      }
    };
  }

  notify(state) {
    this.listeners.forEach((listener) => {
      listener(state);
    });
  }

  handlePopState = () => {
    this.notify(this.getState());
  };

  handleClick = (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest('a');

    if (!link) return;

    const url = new URL(link.href);

    if (url.origin !== window.location.origin) return;

    if (
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey ||
      link.target === '_blank'
    ) {
      return;
    }

    event.preventDefault();

    this.navigate(link.href);
  };

  getLocation() {
    const url = new URL(window.location.href);

    return {
      href: url.href,
      origin: url.origin,
      pathname: url.pathname,
      search: url.search,
      hash: url.hash,
    };
  }

  getState() {
    const pathname = this.getRoutePath(window.location.pathname);

    const match = pathname ? this.getRoute(pathname) : undefined;

    return {
      location: this.getLocation(),
      route: match?.route,
      params: match?.params ?? {},
    };
  }
}
