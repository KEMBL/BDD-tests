import { $, ElementFinder, by } from "protractor";

export class SearchPageObjects {
  public dropdownButton: ElementFinder;

  constructor() {
    this.addShadowRootLocator();
    this.dropdownButton = $("button-with-popup").element(
      by.css_sr("::sr default-button")
    );
  }

  isDropDownButtonPresent = async (): Promise<boolean> => {
    return await this.dropdownButton.isPresent();
  };

  isPopupPresent = async (): Promise<boolean> => {
    const popupWindow = $("button-with-popup").element(
      by.css_sr("::sr popup-window")
    );
    
    if (!await popupWindow.isPresent()) {
      return false;
    }

    const searchPopUp = popupWindow.element(
      by.css_sr("::sr div.popupWindow--visible")
    );
    return await searchPopUp.isPresent();
  };

  addShadowRootLocator() {
    /**  https://stackoverflow.com/a/48423974/6152462
     * Usage:
     *   O  element(by.css_sr('#parentElement #innerElement'))          <=> $('#parentElement #innerElement')
     *   O  element(by.css_sr('#parentElement::sr #innerElement'))      <=> $('#parentElement').shadowRoot.$('#innerElement')
     *   O  element.all(by.css_sr('#parentElement .inner-element'))     <=> $$('#parentElement .inner-element')
     *   O  element.all(by.css_sr('#parentElement::sr .inner-element')) <=> $$('#parentElement').shadowRoot.$$('.inner-element')
     *   O  parentElement.element(by.css_sr('#innerElement'))           <=> parentElement.$('#innerElement')
     *   O  parentElement.element(by.css_sr('::sr #innerElement'))      <=> parentElement.shadowRoot.$('#innerElement')
     *   O  parentElement.all(by.css_sr('.inner-element'))              <=> parentElement.$$('.inner-element')
     *   O  parentElement.all(by.css_sr('::sr .inner-element'))         <=> parentElement.shadowRoot.$$('.inner-element')
     */
    by.addLocator(
      "css_sr",
      (cssSelector: string, opt_parentElement, opt_rootSelector) => {
        let selectors = cssSelector.split("::sr");
        if (selectors.length === 0) {
          return [];
        }

        let shadowDomInUse =
          document.head["createShadowRoot"] || document.head.attachShadow;
        let getShadowRoot = el => (el && shadowDomInUse ? el.shadowRoot : el);
        let findAllMatches = (
          selector: string,
          targets: any[],
          firstTry: boolean
        ) => {
          let using,
            i,
            matches = [];
          for (i = 0; i < targets.length; ++i) {
            using = firstTry ? targets[i] : getShadowRoot(targets[i]);
            if (using) {
              if (selector === "") {
                matches.push(using);
              } else {
                Array.prototype.push.apply(
                  matches,
                  using.querySelectorAll(selector)
                );
              }
            }
          }
          return matches;
        };

        let matches = findAllMatches(
          selectors.shift().trim(),
          [opt_parentElement || document],
          true
        );
        while (selectors.length > 0 && matches.length > 0) {
          matches = findAllMatches(selectors.shift().trim(), matches, false);
        }
        return matches;
      }
    );
  }
}
