// Catálogo centralizado con stock de 1 unidad por variante
const catalogoData = {
  "conjuntos-deportivos": {
    titulo: "Conjuntos Deportivos de Fútbol",
    precio: 45000,
    modelos: [
      { id: "arsenal", nombre: "Arsenal FC", img: "images/conjuntos deportivos/conjunto-arsenal.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "barsa", nombre: "FC Barcelona", img: "images/conjuntos deportivos/conjunto-barsa.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "flamengo", nombre: "Flamengo", img: "images/conjuntos deportivos/conjunto-flamengo.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "francia", nombre: "Selección Francia", img: "images/conjuntos deportivos/conjunto-francia.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "italia", nombre: "Selección Italia", img: "images/conjuntos deportivos/conjunto-italia.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "mancity", nombre: "Manchester City", img: "images/conjuntos deportivos/conjunto-mancity.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "manutd", nombre: "Manchester United", img: "images/conjuntos deportivos/conjunto-manutd.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "realmadrid", nombre: "Real Madrid", img: "images/conjuntos deportivos/conjunto-realmadrid.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } }
    ]
  },
  "remera-lisa": {
    titulo: "Remera Lisa Street",
    precio: 4500,
    modelos: [
      { id: "lisa-negra", nombre: "Remera Lisa Street", img: "images/remera-lisa.jpg", stock: { S: 1, M: 1, L: 1, XL: 1 } }
    ]
  }
};

let cart = [];
let productoSeleccionadoActual = null;
let modeloSeleccionadoActual = null;

// Abrir Modal
function abrirModal(productoKey) {
  productoSeleccionadoActual = catalogoData[productoKey];
  if (!productoSeleccionadoActual) return;
  
  document.getElementById('modal-titulo').textContent = productoSeleccionadoActual.titulo;
  document.getElementById('modal-precio').textContent = `$${productoSeleccionadoActual.precio.toLocaleString('es-AR')}`;
  
  const containerModelos = document.getElementById('modal-modelos-list');
  containerModelos.innerHTML = '';

  productoSeleccionadoActual.modelos.forEach((mod, index) => {
    const item = document.createElement('div');
    item.className = `modelo-option ${index === 0 ? 'selected' : ''}`;
    item.onclick = () => seleccionarModelo(index);
    item.innerHTML = `
      <img src="${mod.img}" alt="${mod.nombre}">
      <span>${mod.nombre}</span>
    `;
    containerModelos.appendChild(item);
  });

  seleccionarModelo(0);
  document.getElementById('modal-producto').classList.add('active');
}

function seleccionarModelo(index) {
  modeloSeleccionadoActual = productoSeleccionadoActual.modelos[index];
  
  // Actualizar la imagen principal del modal a tamaño completo
  const imgPrincipal = document.getElementById('modal-img-principal');
  imgPrincipal.src = modeloSeleccionadoActual.img;
  imgPrincipal.alt = modeloSeleccionadoActual.nombre;

  // Actualizar la selección de miniaturas
  const options = document.querySelectorAll('.modelo-option');
  options.forEach((opt, i) => opt.classList.toggle('selected', i === index));

  // Cargar talles disponibles
  const selectTalle = document.getElementById('modal-talle');
  selectTalle.innerHTML = '';
  
  for (const [talle, cant] of Object.entries(modeloSeleccionadoActual.stock)) {
    const opt = document.createElement('option');
    opt.value = talle;
    opt.textContent = `${talle} ${cant === 0 ? '(Agotado)' : ''}`;
    selectTalle.appendChild(opt);
  }

  actualizarStockModal();
}

function actualizarStockModal() {
  const talleSel = document.getElementById('modal-talle').value;
  const stockDisponible = modeloSeleccionadoActual.stock[talleSel] || 0;
  
  const stockStatus = document.getElementById('modal-stock-status');
  const btnAdd = document.getElementById('btn-modal-add');
  const inputCant = document.getElementById('modal-cant');

  if (stockDisponible > 0) {
    stockStatus.innerHTML = `Stock disponible: <span class="cant-stock">${stockDisponible} un.</span>`;
    stockStatus.classList.remove('sin-stock');
    btnAdd.disabled = false;
    btnAdd.textContent = "+ Agregar al Carrito";
    inputCant.disabled = false;
    inputCant.max = stockDisponible;
    inputCant.value = 1;
  } else {
    stockStatus.innerHTML = `<span class="cant-stock">Agotado en Talle ${talleSel}</span>`;
    stockStatus.classList.add('sin-stock');
    btnAdd.disabled = true;
    btnAdd.textContent = "Agotado en este talle";
    inputCant.disabled = true;
  }
}

function cerrarModal() {
  document.getElementById('modal-producto').classList.remove('active');
}

// Agregar al Carrito y descontar stock
function agregarAlCarritoDesdeModal() {
  const talleSel = document.getElementById('modal-talle').value;
  const inputCant = document.getElementById('modal-cant');
  const cantidadPedida = parseInt(inputCant.value) || 1;
  const stockDisponible = modeloSeleccionadoActual.stock[talleSel];

  if (cantidadPedida > stockDisponible) {
    alert(`Solo queda ${stockDisponible} unidad disponible en talle ${talleSel}.`);
    return;
  }

  // Descontar del stock local
  modeloSeleccionadoActual.stock[talleSel] -= cantidadPedida;

  const itemKey = `${modeloSeleccionadoActual.nombre} (${talleSel})`;
  const itemExistente = cart.find(i => i.key === itemKey);

  if (itemExistente) {
    itemExistente.quantity += cantidadPedida;
  } else {
    cart.push({
      key: itemKey,
      nombre: modeloSeleccionadoActual.nombre,
      precio: productoSeleccionadoActual.precio,
      talle: talleSel,
      quantity: cantidadPedida,
      modeloRef: modeloSeleccionadoActual
    });
  }

  cerrarModal();
  updateCartUI();
  toggleCart();
}

// Eliminar ítem del carrito y reponer stock
function removeFromCart(key) {
  const item = cart.find(i => i.key === key);
  if (item) {
    item.modeloRef.stock[item.talle] += item.quantity;
  }
  cart = cart.filter(i => i.key !== key);
  updateCartUI();
}

// Drawer del Carrito
function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('active');
  document.getElementById('cart-overlay').classList.toggle('active');
}

function updateCartUI() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartCountEl = document.getElementById('cart-count');
  const cartTotalPriceEl = document.getElementById('cart-total-price');

  let totalCount = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="cart-empty-text">El carrito está vacío</p>';
  } else {
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
      totalCount += item.quantity;
      totalPrice += item.precio * item.quantity;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <div>
          <strong>${item.nombre}</strong>
          <div class="cart-item-details">Talle: ${item.talle} | $${item.precio.toLocaleString('es-AR')} x ${item.quantity}</div>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.key}')">Eliminar</button>
      `;
      cartItemsContainer.appendChild(itemEl);
    });
  }

  cartCountEl.textContent = totalCount;
  cartTotalPriceEl.textContent = '$' + totalPrice.toLocaleString('es-AR');
}

// Filtro de Pestañas
function filtrarCategoria(categoria, event) {
  const cards = document.querySelectorAll('.producto-card');
  document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
  if(event) event.target.classList.add('active');

  cards.forEach(card => {
    if (categoria === 'todos' || card.dataset.categoria === categoria) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// Envío a WhatsApp
function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Tu carrito está vacío.');
    return;
  }

  let message = "Hola! Quiero pedir en Estilo Bakano:\n\n";
  let total = 0;

  cart.forEach(item => {
    message += `• ${item.nombre} - Talle ${item.talle} (x${item.quantity}) = $${(item.precio * item.quantity).toLocaleString('es-AR')}\n`;
    total += item.precio * item.quantity;
  });

  message += `\n*Total a pagar: $${total.toLocaleString('es-AR')}*`;
  message += "\n\n¿Me podrías enviar el link de Mercado Pago para pagar con Tarjeta de Crédito/Débito?";

  window.open(`https://wa.me/5493834287709?text=${encodeURIComponent(message)}`, '_blank');
}