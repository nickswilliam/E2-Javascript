class Pizzas {
  constructor(id, nombre, ingredientes, precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

const pizzasObj = [
  new Pizzas(1, 'Muzzarella Simple', ['Muzzarella', 'Aceitunas', 'Aceite', 'Oregano'], 900),
  new Pizzas(2, 'Jamón y Morrón', ['Muzzarella', 'Morrón', 'Jamón', 'Oregano'], 1500),
  new Pizzas(3, 'Roquefort', ['Roquefort', 'Aceitunas', 'Aceite', 'Oregano'], 1700),
  new Pizzas(4, 'Napolitana', ['Muzzarella', 'Tomate', 'Provenzal', 'Adobo'], 1400),
  new Pizzas(5, 'Fugazzetta', ['Cremoso', 'Cebolla', 'Aceitunas', 'Oregano'], 1800),
  new Pizzas(6, 'Calabresa', ['Muzzarella', 'Aceitunas', 'Salami', 'Adobo'], 1900),
];

const form = document.getElementById('formtype')
const inputNumber = document.getElementById('input-number')
const container = document.querySelector('.container')


const hiddenContainer = () => {
  if (inputNumber.value === '') {
    container.classList.add('hidden')
    container.classList.remove('error')
  }
}

const errorContainer = () => {
  container.classList.add('error')
  container.classList.remove('hidden')
}

const showContainer = () => {
  container.classList.remove('error')
  container.classList.remove('hidden')
}

const searchID = (e) => {
  e.preventDefault();
  let inputSearch = inputNumber.value;
  const inputToInt = parseInt(inputSearch);

  if (inputSearch === '') {
    errorContainer();
    container.innerHTML = 'Debe ingresar un valor';
  } else {
    const arrayFilter = pizzasObj.filter((element) => element.id === inputToInt);

    if (arrayFilter.length === 0) {
      errorContainer();
      container.innerHTML = 'No hay pizzas para el ID ingresado'
    } else {
      showContainer();
      container.innerHTML = `La pizza es: <h2>${arrayFilter[0].nombre}</h2>
                                  y Sale <h3>$${arrayFilter[0].precio}</h3>`
    }
  }
  inputNumber.value = '';
}

form.addEventListener('submit', searchID);
hiddenContainer();