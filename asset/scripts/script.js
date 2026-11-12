const cardContainer = document.querySelector('#card-container');
const staticBackdropLabel = document.querySelector('#staticBackdropLabel');
const productPrice = document.querySelector('#productPrice');
const productDescriptionPar = document.querySelector('#productDescriptionPar');
const themeBtn = document.querySelector('#toggle-tema');
const body = document.querySelector('body');
const FILTERS_CONTAINER = document.querySelector('#filters')


const PRODUCTS = [
  {
    productName: 'Sneaker Run',
    price: '89,00 €',
    description: 'Scarpa leggera per la corsa,scuola in gomma traspirante.',
    img: 'https://placehold.co/300x180',
    id: '1',
    category: 'shoes',

  },
  {
    productName: 'T-shirt basic',
    price: '19,00 €',
    description: 'Cotone biologico, taglio regolare, disponibile in 5 colori.',
    img: 'https://placehold.co/300x180',
    id: '2',
    category: 'clothing',

  },
  {
    productName: 'Borsa city',
    price: '49,00 €',
    description: 'Tessuto resistente, tasca interna, cinghia regolabile.',
    img: 'https://placehold.co/300x180',
    id: '3',
    category: 'accessories',

  },
  {
    productName: 'Felpa',
    price: '99,00 €',
    description: 'Felpa in cotone felpato con cappuccio, tasca a marsupio e polsini a costine.',
    img: 'https://placehold.co/300x180',
    id: '4',
    category: 'clothing',

  },
  {
    productName: 'Braccialetto',
    price: '149,00 €',
    description: "Braccialetto in acciaio inossidabile, chiusura regolabile, resistente all\'acqua.",
    img: 'https://placehold.co/300x180',
    id: '5',
    category: 'accessories',

  },
  {
    productName: 'Sneaker Eleganti',
    price: '79,00 €',
    description: 'Sneaker in pelle liscia con suola bianca, design minimal per look casual ed eleganti.',
    img: 'https://placehold.co/300x180',
    id: '6',
    category: 'shoes',

  }
]

function renderProducts(list) {
  cardContainer.innerHTML = '';

  list.forEach((item) => {
    const newArticle = document.createElement('article');
    newArticle.classList.add('col-12', 'col-sm-6', 'col-xl-4', 'mb-3');
    const newDiv = document.createElement('div');
    newDiv.classList.add('card', 'h-100');
    if (item.category === 'shoes') {
      newDiv.classList.add('scarpe');
    } else if (item.category === 'clothing') {
      newDiv.classList.add('abbigliamento');
    } else if (item.category === 'accessories') {
      newDiv.classList.add('accessori')


    }

    const newImg = document.createElement('img');
    const attributes = {
      src: `${item.img}`,
      alt: `${item.productName}`,
    }

    for (const attribute in attributes) {
      newImg.setAttribute(attribute, attributes[attribute])
    }
    newImg.classList.add('card-img-top', 'img-size', 'img-fluid');
    newDiv.appendChild(newImg);

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body','d-flex','justify-content-between','flex-column');
    const productName = document.createElement('h5');
    productName.textContent = item.productName;
    productName.classList.add('card-title');
    const productDesc = document.createElement('p');
    productDesc.classList.add('card-text',);
    productDesc.textContent = item.description;
    const price = document.createElement('strong');
    price.textContent = item.price;
    price.classList.add('text-primary')
    const newBtn = document.createElement('button');
    newBtn.textContent = 'Dettagli';
    newBtn.classList.add('btn', 'w-100', 'mt-2', 'btn-outline-primary', 'text-primary');
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
      staticBackdropLabel.textContent = item.productName;
      productPrice.textContent = item.price;
      productDescriptionPar.textContent = item.description;

    })


  })
}

renderProducts(PRODUCTS);

//listener per filtraggio

FILTERS_CONTAINER.addEventListener('click', (e) => {
  e.preventDefault();
  
  let categoryChoosed = e.target.dataset.category;
  if(!categoryChoosed){
    return
  }
  renderProducts(filterItems(PRODUCTS, categoryChoosed));
})





// funzione di filtraggio

function filterItems(list, category) {
  return list.filter((item) => item.category === category);


}

// funzione per cambio tema//

themeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? 'Tema Chiaro' : 'Tema Scuro';
})

