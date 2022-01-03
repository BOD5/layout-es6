import styleScss from '../scss/_form.styles.scss';
import { validateEmail } from '../utils';

const closeEvent = new Event('close-modal');

class LoginComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  submitForm(e) {
    const email = this.emailInput.value;
    e.preventDefault();
    if (!validateEmail(email)) {
      this.emailInput.setAttribute('error', 'Invalid Email address');
      return;
    }
    const password = this.passwordInput.value;
    const data = new FormData();
    data.set('email', email);
    data.set('password', password);
    fetch('https://api.investnix.com/v1/user/login', {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log(' - error:27 >', response); // eslint-disable-line no-console
        }
        console.log(' - response:25 >', response); // eslint-disable-line no-console
      })
      .catch((error) => console.error(error));
  }

  connectedCallback() {
    this.#render();
    this.remember = this.shadow.getElementById('.remember');
    this.submitBtn = this.shadow.querySelector('.form__submit');
    this.closeBtn = this.shadow.querySelector('.close');
    this.emailInput = this.shadow.querySelector('#email');
    this.passwordInput = this.shadow.querySelector('#password');

    this.closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.dispatchEvent(closeEvent);
    });
    this.submitBtn.addEventListener('click', (e) => this.submitForm(e));
  }

  disconectedCallback() {
    this.submitBtn.removeEventListener('click');
  }

  #render() {
    this.shadow.innerHTML = `
    <div class="form">
      <h1>
        Login
      </h1>
      <custom-input id='email' type='text' placeholder='Email'></custom-input>
      <custom-input id='password' type='password' placeholder='Password'/></custom-input>
      <div class="form__additional">
        <custom-checkbox id='remember' label='Remember me'></custom-checkbox>
        <a href='/forgot'>Forgot Password</a>
      </div>
      <button class='form__submit'>Login</button>
      <button class='close'></button>
    </div>
    <style>${styleScss}</style>
    `;
  }
}

export default LoginComponent;
