// Capturando header do site
const header = document.querySelector('.header__navbar');

// Criando botão Modal Palmeiras e inserindo no header
const modalPalmeiras = document.createElement('button');
modalPalmeiras.classList.add('btn_palmeiras');
modalPalmeiras.innerText = 'Modal Palmeiras';
header.appendChild(modalPalmeiras);

// Criando Modal
const modal = document.createElement('div');
modal.classList.add('modal-window');
const container = document.createElement('div');
modal.appendChild(container);

const btnClose = document.createElement('button');
btnClose.classList.add('modal-close');
btnClose.innerHTML = '&times;';
container.appendChild(btnClose);

const escudoPalmeiras = document.createElement('img');
escudoPalmeiras.setAttribute(
  'src', 
  'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-0-1536x1536.png'
);
container.appendChild(escudoPalmeiras);

// Implementando Modal
const body = document.querySelector('body');
body.appendChild(modal);

// Abrindo modal
modalPalmeiras.addEventListener('click', () => {
  modal.classList.add('open')
});

// Fechando Modal
btnClose.addEventListener('click', () => {
  modal.classList.remove('open')
});

//  Fechando modal quando clicar em qualquer lugar fora dele
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('open');
  }
}

// Criando Styles Minificado
const style = document.createElement('style');
style.innerText = '.modal-window{position:fixed;background-color:rgba(17,17,17,.61);top:0;right:0;bottom:0;left:0;z-index:999;visibility:hidden;opacity:0;pointer-events:none;transition:all .3s}.modal-window.open{visibility:visible;opacity:1;pointer-events:auto}.modal-window>div{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:2em;background:#fff;border-radius:1rem}.modal-window img{width:400px}.modal-close{background-color:transparent;color:#aaa;font-size:28px;font-weight:700;position:absolute;right:0;text-align:center;top:0;margin-right:10px;border:none}.modal-close:hover{color:tomato}.btn_palmeiras{background-color:#006339;color:#fff;font-size:14px;font-family:inherit;line-height:18px;padding:8px 16px;font-weight:700;border-radius:50px;text-transform:uppercase;border-color:transparent;border-width:1px;transition:all .2s}.btn_palmeiras:hover{background:#007745;transition:all .2s}'

// Inserindo o Style antes do 1º <script> no header
const script = document.querySelector('script');
script.parentNode.insertBefore(style, script);