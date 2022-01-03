import styleScss from '../scss/_modal.styles.scss';

class Modal extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.shadow.innerHTML += `
    <div class="modal">
      <div class="modal__content">
        <slot name="content"></slot>
      </div>
    </div>
    <style>${styleScss}</style>
    `;
  }
}

export default Modal;
