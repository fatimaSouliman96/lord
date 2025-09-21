declare module "isotope-layout" {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    transitionDuration?: string | number;
    filter?: string | ((itemElem: Element) => boolean);
    sortBy?: string | ((itemElem: Element) => number | string);
    [key: string]: any;
  }

  class Isotope {
    constructor(element: Element | string, options?: IsotopeOptions);
    arrange(opts: Partial<IsotopeOptions>): void;
    layout(): void;
    reloadItems(): void;
    destroy(): void;
  }

  export = Isotope;
}

