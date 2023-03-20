let image1 = document.querySelector('section img:first-child');
let image2 = document.querySelector('section img:nth-child(2)');
let image3 = document.querySelector('section img:nth-child(3)');

const state = {
    allProductArray: [],
  };

  function Product(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * state.allProductArray.length);
  }

  function renderProduct() {
    // call the getRandomNumber
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();
  
    while (product1 === product2) {
      product2 = getRandomNumber();
    }
    image1.src = state.allProductArray[product1].src;
    image2.src = state.allProductArray[product2].src;
    image3.src = state.allProductArray[product3].src;
    image1.alt = state.allProductArray[product1].name;
    image2.alt = state.allProductArray[product2].name;
    image3.alt = state.allProductArray[product3].name;
    state.allProductArray[product1].views++;
    state.allProductArray[product2].views++;
    state.allProductArray[product3].views++;
  }
  
  