import Card from './components/card';
import CustomInput from './components/customInput';
import LoginComponent from './components/login';
import Checkbox from './components/customCheckbox';
import Modal from './components/modal';
import CreateComponent from './components/createAccount';

const root = document.querySelector('.root');
const list = document.querySelector('.list');
window.customElements.define('card-content', Card);
window.customElements.define('custom-input', CustomInput);
window.customElements.define('login-element', LoginComponent);
window.customElements.define('custom-checkbox', Checkbox);
window.customElements.define('modal-dialog', Modal);
window.customElements.define('create-account', CreateComponent);

const modal = document.createElement('modal-dialog');
const login = document.createElement('login-element');
const createAccount = document.createElement('create-account');

function closeModal(e) {
  e.target.removeEventListener('close-modal', closeModal);
  modal.removeChild(e.target);
  modal.remove();
}

function OpenModal(content) {
  modal.appendChild(content);
  content.setAttribute('slot', 'content');
  content.addEventListener('close-modal', closeModal);
  root.after(modal);
}

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', (e) => OpenModal(login));

const createBtn = document.getElementById('create');
createBtn.addEventListener('click', (e) => OpenModal(createAccount));

(async () => {
  const categories = await fetch('https://api.investnix.com/v1/categories/').then((res) => res.json());
  const filters = await fetch('https://api.investnix.com/v1/filters/').then((res) => res.json());

  const dividend = filters.find((f) => f.id === 'dividend_type_id');
  const payout = filters.find((f) => f.id === 'payout_frequency_id');
  const liquidity = filters.find((f) => f.id === 'liquidity_id');
  const investorType = filters.find((f) => f.id === 'investor_type_id');

  const { data } = await fetch('https://api.investnix.com/v1/offers').then((res) => res.json());
  // const { data } = await fetch('https://api.investnix.com/v1/offers?dividend_type_id[]=2&dividend_type_id[]=3&category_id=5&s=club').then((res) => res.json());
  data.forEach((el, index) => {
    const content = {
      preview_image: el.preview_image,
      name: el.name,
      preview_text: el.preview_text,
      rating: el.rating,
      comission: el.comission,
      investment_time: el.investment_time,
      target_return: el.target_return,
      minimal_investment: el.minimal_investment,
      link: (el.invest_link) ? el.invest_link : el.website_link,
      investor_type: investorType.options.find(({ id }) => id === el.investor_type_id).name,
      liquidity: liquidity.options.find(({ id }) => id === el.liquidity_id).name,
      payout: payout.options.find(({ id }) => id === el.payout_frequency_id).name,
      dividend: dividend.options.find(({ id }) => id === el.dividend_type_id).name,
      category: categories.find(({ id }) => id === el.category_id).name,
      slug: el.slug,
    };
    const card = new Card();
    Object.keys(content).forEach((atr) => {
      card.setAttribute(`data-${atr}`, content[atr]);
      if (index % 3 === 0) card.setAttribute('simple', '');
    });
    list.appendChild(card);
  });
})();
