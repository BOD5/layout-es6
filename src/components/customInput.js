import styleScss from '../scss/_input.styles.scss';
import { insertAfter, errorBlock } from '../utils';

const eye = `<svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.28065 8C8.28065 8.69619 8.55721 9.36387 9.0495 9.85616C9.54178 10.3484 10.2095 10.625 10.9057 10.625C11.6018 10.625 12.2695 10.3484 12.7618 9.85616C13.2541 9.36387 13.5307 8.69619 13.5307 8C13.5307 7.30381 13.2541 6.63613 12.7618 6.14384C12.2695 5.65156 11.6018 5.375 10.9057 5.375C10.2095 5.375 9.54178 5.65156 9.0495 6.14384C8.55721 6.63613 8.28065 7.30381 8.28065 8ZM21.0822 7.39531C18.8603 2.71484 15.5017 0.359375 10.9994 0.359375C6.49472 0.359375 3.13847 2.71484 0.916591 7.39766C0.82747 7.58637 0.78125 7.79247 0.78125 8.00117C0.78125 8.20987 0.82747 8.41598 0.916591 8.60469C3.13847 13.2852 6.49706 15.6406 10.9994 15.6406C15.5041 15.6406 18.8603 13.2852 21.0822 8.60234C21.2627 8.22266 21.2627 7.78203 21.0822 7.39531ZM10.9057 12.125C8.62753 12.125 6.78065 10.2781 6.78065 8C6.78065 5.72188 8.62753 3.875 10.9057 3.875C13.1838 3.875 15.0307 5.72188 15.0307 8C15.0307 10.2781 13.1838 12.125 10.9057 12.125Z"/>
</svg>`;

const eyeClose = `<svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7618 11.8562C12.2695 12.3485 11.6018 12.6251 10.9057 12.6251C10.8285 12.6251 10.7526 12.6216 10.6774 12.615L13.5206 9.77179C13.5271 9.84702 13.5307 9.92319 13.5307 10.0001C13.5307 10.6963 13.2541 11.3639 12.7618 11.8562Z" fill="#C4C4C4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5932 0.880069L19.5944 1.88038C19.6118 1.8978 19.6257 1.91847 19.6351 1.94124C19.6445 1.964 19.6494 1.9884 19.6494 2.01304C19.6494 2.03768 19.6445 2.06208 19.6351 2.08484C19.6257 2.1076 19.6118 2.12828 19.5944 2.14569L2.90315 18.836C2.86799 18.8711 2.82032 18.8909 2.77061 18.8909C2.72091 18.8909 2.67323 18.8711 2.63807 18.836L1.63753 17.8355C1.60239 17.8003 1.58265 17.7526 1.58265 17.7029C1.58265 17.6532 1.60239 17.6055 1.63753 17.5704L4.11698 15.0919C2.86932 13.9666 1.80253 12.4708 0.916591 10.6048C0.82747 10.416 0.78125 10.2099 0.78125 10.0012C0.78125 9.79254 0.82747 9.58644 0.916591 9.39772C3.13378 4.70554 6.49472 2.35944 10.9994 2.35944C12.7636 2.35944 14.3525 2.72062 15.7659 3.44296L18.3281 0.880069C18.3632 0.844933 18.4109 0.825195 18.4606 0.825195C18.5103 0.825195 18.558 0.844933 18.5932 0.880069ZM7.31612 7.96723C6.96507 8.58723 6.78059 9.28758 6.78065 10.0001C6.77966 10.6777 6.9465 11.3451 7.26628 11.9426L8.40581 10.803C8.25866 10.3435 8.24094 9.85226 8.35459 9.38329C8.46824 8.91432 8.70887 8.48571 9.05008 8.1445C9.3913 7.80329 9.8199 7.56265 10.2889 7.449C10.7578 7.33535 11.2491 7.35307 11.7086 7.50022L12.8482 6.36069C12.2196 6.02518 11.5149 5.85818 10.8026 5.87598C10.0904 5.89378 9.39484 6.09576 8.78384 6.46224C8.17284 6.82873 7.66718 7.34723 7.31612 7.96723Z" fill="#C4C4C4"/>
<path d="M18.1365 5.14502C19.2754 6.24111 20.2573 7.65791 21.0823 9.39541C21.1715 9.58412 21.2177 9.79023 21.2177 9.99893C21.2177 10.2076 21.1715 10.4137 21.0823 10.6024C18.8651 15.2946 15.5042 17.6407 10.9995 17.6407C9.37169 17.6407 7.8931 17.3331 6.56372 16.718L9.42919 13.8525C10.1736 14.1373 10.9845 14.2004 11.7641 14.0343C12.5436 13.8681 13.2583 13.4798 13.8219 12.9162C14.3854 12.3526 14.7738 11.6379 14.9399 10.8584C15.1061 10.0789 15.0429 9.26794 14.7582 8.52353L18.1365 5.14502Z" fill="#C4C4C4"/>
</svg>`;

class CustomInput extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.inputType = this.getAttribute('type');
    this.inputPlaceholder = this.hasAttribute('placeholder') ? this.getAttribute('placeholder') : '';
    this.value = this.getAttribute('value') || '';
    this.errorMsg = '';
  }

  #showPass() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
      this.buttonRef.innerHTML = eyeClose;
    } else {
      this.inputType = 'password';
      this.buttonRef.innerHTML = eye;
    }
    this.inputRef.setAttribute('type', this.inputType);
  }

  #onInput(e) {
    if (this.hasAttribute('error')) this.removeAttribute('error');
    this.value = e.target.value;
  }

  connectedCallback() {
    this.#render();
    this.inputRef = this.shadow.querySelector('input');
    this.labelRef = this.shadow.querySelector('label');
    this.wrapperRef = this.shadow.querySelector('div');
    this.errorRef = errorBlock(this.errorMsg);
    if (this.#isPassword()) {
      this.buttonRef = this.shadow.querySelector('button');
      this.buttonRef.addEventListener('click', this.#showPass.bind(this));
    }
    this.inputRef.addEventListener('input', this.#onInput.bind(this));
  }

  static get observedAttributes() {
    return ['error'];
  }

  attributeChangedCallback(prop) {
    if (prop === 'error') {
      if (this.hasAttribute('error')) {
        this.errorMsg = this.getAttribute('error');
        this.labelRef.classList.add('error');
        this.errorRef.innerHTML = this.errorMsg;
        insertAfter(this.errorRef, this.wrapperRef);
      } else {
        this.errorMsg = '';
        this.labelRef.classList.remove('error');
        this.errorRef.remove();
      }
    }
  }

  disconnectedCallback() {
    if (this.#isPassword()) this.buttonRef.removeEventListener('click', this.#showPass);
    this.inputRef.removeEventListener('input', this.#onInput);
  }

  #isPassword() {
    return this.getAttribute('type') === 'password';
  }

  #render() {
    this.shadow.innerHTML = `
    <div class="control">
      <input
        id="input"
        type="${this.inputType}"
        ${this.#isPassword() ? 'style="width: 90%"' : ''}
        required
        value="${this.value}"
      >
      <label
        for="input"
        class="${this.hasAttribute('error') && 'error'}"
      >
        ${this.inputPlaceholder}
      </label>
      ${this.#isPassword() ? `
      <button>
        ${eye}
      </button>` : ''}
    </div>
    <style>${styleScss}</style>
    `;
  }
}

export default CustomInput;
