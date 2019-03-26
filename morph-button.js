import { LitElement, html, css } from 'lit-element';
import '@moduware/morph-ripple/morph-ripple.js';
import { getPlatform } from '@moduware/lit-utils';

/**
 * `morph-button`
 * Button that morphs for current mobile OS
 *
 * @customElement
 * @extends HTMLElement
 * @demo morph-button/demo/index.html
 */
class MorphButton extends LitElement {
  static get styles() {
    return [
      css`
      
        :host {
          --have-access-to-shared-colors: var(--morph-shared-colors-connected, black);
        }
      
        /* if iOS assigning colors from iOS colors table */
        :host([platform="ios"]) {
          /* default blue ios colors added here and don't need shared color file to work */
          --polymorph-ios-blue-color: #007aff;
          --polymorph-ios-blue-color--background: rgba(0, 122, 255, 0.15);
      
          --blue-color: var(--polymorph-ios-blue-color);
          --blue-color--background: var(--polymorph-ios-blue-color--background);
      
          --red-color: var(--polymorph-ios-red-color);
          --red-color--background: var(--polymorph-ios-red-color--background);
      
          --green-color: var(--polymorph-ios-green-color);
          --green-color--background: var(--polymorph-ios-green-color--background);
      
          --gray-color: var(--polymorph-ios-gray-color);
          --gray-color--background:var(--polymorph-ios-gray-color--background);
        }
      
        /* if Android assigning colors from Android colors table */
        :host([platform="android"]) {
          /* default blue android colors added here to make it work without shared colors file */
          --polymorph-android-blue-color: #2196f3;
          --polymorph-android-blue-color--background: #0D82DF;
      
          --blue-color: var(--polymorph-android-blue-color);
          --blue-color--background: var(--polymorph-android-blue-color--background);
      
          --red-color: var(--polymorph-android-red-color);
          --red-color--background: var(--polymorph-android-red-color--background);
      
          --green-color: var(--polymorph-android-green-color);
          --green-color--background: var(--polymorph-android-green-color--background);
      
          --gray-color: var(--polymorph-android-gray-color);
          --gray-color--background:var(--polymorph-android-gray-color--background);
      
          --android-raised-1-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
          --android-raised-2-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        }
      
        /* Shared color configuration */
        :host {
          --color: var(--blue-color);
          --active-color--background: var(--blue-color--background);
          --filled-text-color: white;
      
          --font-size: 14px;
        }
      
        /* Prebuilt colors */
        :host([color="red"]) {
          --color: var(--red-color);
          --active-color--background: var(--red-color--background);
        }
      
        :host([color="green"]) {
          --color: var(--green-color);
          --active-color--background: var(--green-color--background);
        }
      
        :host([color="gray"]) {
          --color: var(--gray-color);
          --active-color--background: var(--gray-color--background);
        }
      
        /* Shared styles between platforms */
        :host {
          appearance: none;
          background: none;
          box-sizing: border-box;
          color: var(--color);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: var(--font-size);
          margin: 0;
          outline: 0;
          overflow: hidden;
          position: relative;
          text-align: center;
          text-decoration: none;
          text-overflow:ellipsis;
          white-space: nowrap;
          -webkit-tap-highlight-color: transparent;
      
          /* We need to use system font here */
          font-family: inherit;
        }
        
        /* class to be used to make morph-button work with morph-swipeout */
        :host([platform="ios"].swiper-integration-class),
        :host([platform="android"].swiper-integration-class) {
          height: 100%;
          flex: 1;
        }
      
        /* iOS only styles */
        :host([platform="ios"]) {
          border-radius: 5px;
          border: 1px solid var(--color);
          cursor: pointer;
          height: 29px;
          line-height: 27px;
          padding: 0 10px;
          position: relative;
          font-family: -apple-system, 'SF UI Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }
      
        :host([platform="ios"]:active) {
          background: var(--active-color--background);
        } 
      
        :host([platform="ios"][active]) {
          background: var(--color);
          color: var(--filled-text-color);
        }
      
        :host([platform="ios"][rounded]) {
          border-radius: 27px 27px 27px 27px;
        }
      
        :host([platform="ios"][big]) {
          font-size: 17px;
          height: 44px;
          line-height: 42px;
        }
      
        :host([platform="ios"][filled]) {
          background: var(--color);
          color: var(--filled-text-color);
          border-color: transparent;
        }
      
        :host([platform="ios"][filled]:active) {
          opacity: 0.8;
        }
      
        /* Android only styles */
        :host([platform="android"]) {
          border-radius: 2px;
          height: 36px;
          line-height: 36px;
          min-width: 64px;;
          padding: 0 8px;
          text-transform: uppercase;
          transform: translate3d(0,0,0);
          transition: 300ms;
          font-family: Roboto, Noto, Helvetica, Arial, sans-serif;
        }
      
        :host([platform="android"]:active) {
          background: rgba(0, 0, 0, 0.1);
        } 
      
        :host([platform="android"][big]) {
          height: 48px;
          line-height: 48px;
          border-radius: 3px;
        }
      
        :host([platform="android"][filled]) {
          --android-filled-background-color: var(--color);
          background-color: var(--android-filled-background-color);
          color: var(--filled-text-color);
        }
        
        :host([platform="android"][filled]:active) {
          background: var(--active-color--background);
        }
      
        :host([platform="android"][raised]) {
          box-shadow: var(--android-raised-1-shadow);
        }
      
        :host([platform="android"][raised]:active) {
          box-shadow: var(--android-raised-2-shadow);
        }
      
        :host(:not([platform="android"])) morph-ripple {
          display: none;
        }
      
        :host([platform="android"]) morph-ripple {
          --ripple-color: var(--color);
        }
      
        :host([platform="android"][filled]) morph-ripple {
          --ripple-color: white;
        }
      
        /* important is to counter the border-radius on big buttons for android and others */
        :host([flat]) {
          border-radius: 0 !important;
        }
      `
    ];
  }

  render() {
    return html`
      <a href\$="[[link]]" target\$="[[target]]" rel\$="[[relation]]">
        <slot></slot>
        <morph-ripple></morph-ripple>
      </a>
    `;
  }

  static get is() { return 'morph-button'; }
  static get properties() {
    return {

      platform: { 
        type: String,
        reflect: true
      },
      /** Common for both platforms */
      big: {
        type: Boolean,
        value: false,
        reflect: true
      },

      /** Common for both platforms */
      filled: {
        type: Boolean,
        value: false,
        reflect: true
      },

      /** Common for both platforms */
      color: {
        type: String,
        reflect: true,
        hasChanged: (value, oldValue) => value !== oldValue
      },

      /** Common for both platforms */
      link: String,
      target: String, 
      relation: String,

      /** iOS specific property */
      active: {
        type: Boolean,
        value: false,
        reflect: true
      },

      /** iOS specific property */
      rounded: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      
      /** Android specific property */
      raised: {
        type: Boolean,
        value: false,
        reflectToAttribute: true
      },
      
      /** Remove round corners */
      flat: {
        type: Boolean,
        value: false,
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.color = 'blue';
  }
  
  /**
   * lit-element lifecycle called once before the first updated().
   */
  firstUpdated() {
    super.firstUpdated();
    // check first if platform assigned in html markup before using getPlatform to auto detect platform
    if(!this.hasAttribute('platform')) {
      this.platform = getPlatform();
    }
  }

  updated(changedProperties) {
    if(this.color) {
      this.colorAssigned(this.color);
    }
  }
  
  connectedCallback() {
    super.connectedCallback();
  }

  /**
   * colorAssigned function will fire a console.warn message depending on wether the standard color red gray and green were used
   *
   * @param  {[any]} oldValue old value of color property
   * @param  {any} newValue new value of color property
   *
   * @return {String}          gives a console warn message when shared-colors is not included
   */
  colorAssigned(value) {
    let sharedColorsNotConnected = !this.checkIfSharedStylesConnected();
    
    if (this.checkIfStandardColorUsed(value) && sharedColorsNotConnected) {
      console.warn(`WARNING: You need to include morph-shared-colors if you want to use standard colors like ${value} in the color attribute of morph-button.`);
    }
  }

  /**
   * checkIfStandardColorUsed checks if standard colors were used
   *
   * @param  {String} oldValue - old value of the color property from its observer
   *
   * @return {Boolean}          returns true if oldValue is equal to color red, gray or green else returns false
   */
  checkIfStandardColorUsed(oldValue) {
    if(oldValue == 'red' || oldValue == 'gray' || oldValue == 'green') {
      return true;
    }
    return false;
  }

  /**
    * checkIfSharedStylesConnected
    *
    * @return {Boolean} - return true if style not equal to 'deepskyblue' meaning shared color file not connected and returns false otherwise
    */
  checkIfSharedStylesConnected() {
    let styleIncludedColor = this.getStyleShadyOrDOM();
    styleIncludedColor = styleIncludedColor.replace(/\s+/, '');
    if (styleIncludedColor != 'deepskyblue') {
      console.warn('WARNING: You need to include morph-shared-colors if you want to use standard colors!');
      return false;
    }
    return true;
  }

  /**
    * @return {Object} - returns the computed style based on if ShadyCSS is used or not 
    */
  getStyleShadyOrDOM() {
    if (typeof (ShadyCSS) != 'undefined') {
      return ShadyCSS.getComputedStyleValue(this, '--have-access-to-shared-colors');
    } else {
      return getComputedStyle(this).getPropertyValue('--have-access-to-shared-colors');
    }
  }
}

window.customElements.define(MorphButton.is, MorphButton);
