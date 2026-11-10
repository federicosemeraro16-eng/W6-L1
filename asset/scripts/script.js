const cardContainer = document.querySelector('#card-container');
const staticBackdropLabel = document.querySelector('#staticBackdropLabel');
const productPrice = document.querySelector('#productPrice');
const productDescriptionPar = document.querySelector('#productDescriptionPar');


const PRODUCTS = [
  {
    productName: 'Sneaker Run',
    price: '89,00 €',
    description: 'Scarpa leggera per la corsa,scuola in gomma traspirante.',
    id: 'sneaker'

  },
  {
    productName: 'T-shirt basic',
    price: '19,00 €',
    description: 'Cotone biologico, taglio regolare, disponibile in 5 colori.',
    id: 't-shirt',

  },
  {
    productName: 'Borsa city',
    price: '49,00 €',
    description: 'Tessuto resistente, tasca interna, cinghia regolabile.',
    id: 'borsa-city',

  }
]

PRODUCTS.forEach((product) => {
  const newArticle = document.createElement('article');
  newArticle.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3');
  const newDiv = document.createElement('div');
  newDiv.classList.add('card', 'h-100');
  const newImg = document.createElement('img');
  const attributes = {
    src: 'https://savefumisteria.it/wp-content/uploads/2023/09/placeholder-661-1.png',
    alt: `${product.productName}`,
  }

  for (const attribute in attributes) {
    newImg.setAttribute(attribute, attributes[attribute])
  }
  newImg.classList.add('card-img-top', 'img-size', 'img-fluid');
  newDiv.appendChild(newImg);

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  const productName = document.createElement('h5');
  productName.textContent = product.productName;
  productName.classList.add('card-title');
  const productDesc = document.createElement('p');
  productDesc.classList.add('card-text');
  productDesc.textContent = product.description;
  const price = document.createElement('strong');
  price.textContent = product.price;
  const newBtn = document.createElement('button');
  newBtn.textContent = 'Dettagli';
  newBtn.classList.add('btn', 'btn-primary', 'w-100', 'mt-2');
  const btnAttr = {
    'data-bs-target': '#modal',
    'data-bs-toggle': 'modal',

  }

  for (const chiave in btnAttr) {

    newBtn.setAttribute(chiave, btnAttr[chiave])
  }


  cardBody.appendChild(productName);
  cardBody.appendChild(productDesc)
  cardBody.appendChild(price);
  cardBody.appendChild(newBtn);

  newDiv.appendChild(cardBody);
  newArticle.appendChild(newDiv);
  cardContainer.appendChild(newArticle);

  
  newBtn.addEventListener('click', (e) => {
    e.preventDefault();
    staticBackdropLabel.textContent = product.productName;
    productPrice.textContent = product.price;
    productDescriptionPar.textContent = product.description;

  })


})