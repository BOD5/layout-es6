import styleScss from '../scss/_checkbox.styles.scss';

class Checkbox extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.label = this.getAttribute('label') || '';
  }

  #onChange(newV) {
    console.log(' - newV:11 >', newV); // eslint-disable-line no-console
    this.value = newV;
  }

  connectedCallback() {
    this.#render();
    this.checkbox = this.shadow.querySelector('.custom-checkbox');
    this.checkbox.addEventListener('change', (e) => this.#onChange(e.target.checked));
  }

  disconnectedCallback() {
    // this.checkbox.removeEventListener('change');
  }

  #render() {
    this.shadow.innerHTML = `
      <div>
        <input class="custom-checkbox" type='checkbox'>
        <label>${this.label}</label>
      </div>
      <style>${styleScss}</style>
    `;
  }
}

export default Checkbox;
