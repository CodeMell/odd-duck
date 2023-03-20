let productContainer = document.querySelector('.pic');
let image1 = document.querySelector('.pic1 img:first-child');
let image2 = document.querySelector('.pic2 img:first-child');
let image3 = document.querySelector('.pic3 img:first-child');

let clicks = 0;
let maxClicksAllowed = 24;

const state = {
    allProductsArray: [],
  };

  function Product(name, src) {
    this.name = name;
    this.src = src;
    this.views = 0;
    this.clicks = 0;
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * state.allProductsArray.length);
  }

  function renderProducts() {
    let product1 = getRandomNumber();
    let product2 = getRandomNumber();
    let product3 = getRandomNumber();
  
    while (product1 === product2 || product3 === product2 || product3 === product1) {
      product2 = getRandomNumber();
    }
    image1.src = state.allProductsArray[product1].src;
    image2.src = state.allProductsArray[product2].src;
    image3.src = state.allProductsArray[product3].src;
    image1.alt = state.allProductsArray[product1].name;
    image2.alt = state.allProductsArray[product2].name;
    image3.alt = state.allProductsArray[product3].name;
    state.allProductsArray[product1].views++;
    state.allProductsArray[product2].views++;
    state.allProductsArray[product3].views++;
  }
  
  function handleProductClick(event) {
    if (event.target === productContainer) {
      alert('Please click on an image');
    }
    clicks++;
    let clickProduct = event.target.alt;
    for (let i = 0; i < state.allProductsArray.length; i++) {
      if (clickProduct === state.allProductsArray[i].name) {
        state.allProductsArray[i].clicks++;
        break;
      }
    }
    if (clicks === maxClicksAllowed) {
      productContainer.removeEventListener('click', handleProductClick);
      renderResults();
    } else {
      renderProducts();
    }
  }

  function renderResults() {
    let ul = document.querySelector('ul');
    for (let i = 0; i < state.allProductsArray.length; i++) {
      let li = document.createElement('li')
      li.textContent = `${state.allProductsArray[i].name} was seen ${state.allProductsArray[i].views} and clicked${state.allProductsArray[i].clicks} times.`;
      ul.appendChild(li);
    }
  }

  let bag = new Product('bag', './img/bag.jpg');
  let banana = new Product('banana','./img/banana.jpg');
  let bathroom = new Product('bathroom','./img/bathroom.jpg');
  let boots = new Product('boots','./img/boots.jpg');
  let breakfast =  new Product('breakfast','./img/breakfast.jpg');
  let bubblegum =new Product('bubblegum','./img/bubblegum.jpg');
  let chair = new Product('chair','./img/chair.jpg');
  let cthulhu = new Product('cthulhu','./img/cthulhu.jpg');
  let dog_duck = new Product('dog-duck','./img/dog-duck.jpg');
  let dragon = new Product('dragon','./img/dragon.jpg');
  let pen = new Product('pen','./img/pen.jpg');
  let pet_sweep = new Product('pet-sweep','./img/pet-sweep.jpg');
  let scissors = new Product('scissors','./img/scissors.jpg');
  let shark = new Product('shark','./img/shark.jpg');
  let sweep = new Product('sweep','./img/sweep.png');
  let tauntaun = new Product('tauntaun','./img/tauntaun.jpg');
  let unicorn = new Product('unicorn','./img/unicorn.jpg');
  let water_can = new Product('water-can','./img/water-can.jpg');
  let wine_glass = new Product(' wine-glass','./img/wine-glass.jpg');
  state.allProductsArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dog_duck, dragon, pen, pet_sweep, scissors, shark, sweep, tauntaun, unicorn, water_can, wine_glass);

  renderProducts();
  productContainer.addEventListener('click', handleProductClick);