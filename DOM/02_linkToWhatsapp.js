const linkToWhatsapp = document.querySelectorAll('.header__card-whatsapp-item');

linkToWhatsapp.forEach(el => {
  const elementsA = el.firstElementChild;
  
  const link = elementsA.dataset.link;
  const html = elementsA.innerHTML;

  el.removeChild(elementsA);

  const newElementA = document.createElement('a');
  newElementA.setAttribute('href', link);
  newElementA.setAttribute('target', '_blank');
  newElementA.setAttribute('class', 'header-mobile__whatsapp-link');
  newElementA.innerHTML = html;

  const locationToInsert = el.firstChild;

  el.insertBefore(newElementA, locationToInsert);
});