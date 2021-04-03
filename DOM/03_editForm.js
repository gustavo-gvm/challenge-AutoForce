const form = document.querySelector('.form-conversion__body fieldset');

// Função para inserção de vários atributos
function setAttributes(el, attrs) {
  for(var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

// Criando a estrutura HTML
const combobox = document.createElement('div');
combobox.setAttribute('class', 'form-group');

const choices = document.createElement('div');
choices.setAttribute('class', 'choices');
combobox.appendChild(choices);

const choicesInner = document.createElement('div');
choicesInner.setAttribute('class', 'choices__inner');
choices.appendChild(choicesInner);

const select = document.createElement('select');
select.setAttribute('class', 'form-control choices__input');
choicesInner.appendChild(select);

// Passando por cada opção do array e criando um elemento option para cada opção
const options = ['SUV', 'Sedan', 'Hatch', 'Pickup'];
options.map((opt) => {
  const option = document.createElement('option');
  option.setAttribute('value', opt);
  option.innerText = opt;
  select.appendChild(option);
});

form.appendChild(combobox);

// Input mensagem
const textArea = document.createElement('textarea');
  setAttributes(textArea, {
    'class': 'form-control',
    'name': 'mensagem',
    'placeholder': 'Mensagem',
  });

// Adicionando estilo ao textarea
  textArea.style.resize = 'none';
  textArea.style.height = '100px';
  
form.appendChild(textArea);