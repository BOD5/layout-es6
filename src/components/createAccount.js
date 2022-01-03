import styleScss from '../scss/_form.styles.scss';
import { validateEmail } from '../utils';

const closeEvent = new Event('close-modal');

class CreateComponent extends HTMLElement {
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
    const passwordRep = this.passwordRepInput.value;
    const nick = this.nickInput.value;

    if(password !== passwordRep) {
      this.passwordInput.setAttribute('error', 'passwords are different');
      this.passwordRepInput.setAttribute('error', 'passwords are different');
    }

    const data = new FormData();
    data.set('email', email);
    data.set('password', password);
    data.set('password_confirmation', passwordRep);
    data.set('username', nick);

    fetch('https://api.investnix.com/v1/user/signup', {
      method: 'POST',
      body: data,
    })
      .then((response) => {
        if (response.status !== 200) {
          console.log(' - error:27 >'); // eslint-disable-line no-console
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
    this.nickInput = this.shadow.querySelector('#nick');
    this.passwordInput = this.shadow.querySelector('#password');
    this.passwordRepInput = this.shadow.querySelector('#password-rep');

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
      <h1 class="no-margin">
        Create Account
      </h1>
      <div class="form__additional--top">
        <p>Already have an account?</p>
        <a href="/signIn">Sign In</a>
      </div>
      <custom-input id='email' type='text' placeholder='Email'></custom-input>
      <custom-input id='nick' type='text' placeholder='Nickname'></custom-input>
      <custom-input id='password' type='password' placeholder='Password'/></custom-input>
      <custom-input id='password-rep' type='password' placeholder='Repeat Password'/></custom-input>
      <div class='form__additional form__additional--inline'>
        <custom-checkbox id='remember' label='I agree with '></custom-checkbox>
        <a href='/'>Terms and Policies</a>
      </div>
      <button class='form__submit'>Create account</button>
      <button class='close'></button>
    </div>
    <style>${styleScss}</style>
    `;
  }
}

export default CreateComponent;
