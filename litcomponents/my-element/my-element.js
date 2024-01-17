import {LitElement, html} from 'lit-element';

class MyElement extends LitElement {

  constructor() {
    super();
    this.title = 'No title';
    this.icon = undefined;
  }

  static get properties() {
    return {
      title: {type: String},
      icon: {type: String}
    };
  }

  render() {
    console.log('    render');
    return html`
      <h1>Title is: ${this.title}</h1>
      <h3>Icon is: ${this.ico}</h3>
    `;
  }

  // Private method!!!
  // Don't use. Don't override.
  // Showing here just for educational purposes only.
  _enqueueUpdate() {
    console.log('_enqueueUpdate called');
    const result = super._enqueueUpdate();
    console.log('_enqueueUpdate returns ' + result);
    return result;
  }

  // Private method!!!
  // Don't use. Don't override.
  // Showing here just for educational purposes only.
  _requestUpdate(propertyName, oldValue) {
    console.log('_requestUpdate called with args: ' + propertyName + ', ' + oldValue);
    const result = super._requestUpdate(propertyName, oldValue);
    return result;
  }

  performUpdate() {
    console.log('performUpdate starts');
    const result = super.performUpdate();
    console.log('performUpdate ends');
    console.log('--------------------------------------------------');
    return result;
  }

  shouldUpdate(args) {
    console.log('  shouldUpdate called with args: ' + JSON.stringify(args));
    const result = super.shouldUpdate(args);
    console.log('  shouldUpdate returns: ' + result);
    return result;
  }

  update(args) {
    console.log('  update called with args: ' + JSON.stringify(args));
    const result = super.update(args);
    console.log('  update returns: ' + result);
    return result;
  }

  firstUpdated(args) {
    console.log('  firstUpdated called with args: ' + JSON.stringify(args));
    const result = super.firstUpdated(args);
    console.log('  firstUpdated returns: ' + result);
    return result;
  }

  updated(args) {
    console.log('  updated called with args: ', + JSON.stringify(args));
    const result = super.updated(args);
    console.log('  updated returns: ' + result);
    return result;
  }
}

customElements.define('my-element', MyElement);