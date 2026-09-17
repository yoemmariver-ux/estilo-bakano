// Carga del sonido de clic
const clickAudio = new Audio('sounds/click.mp3');

function reproducirClic() {
  clickAudio.currentTime = 0;
  clickAudio.play().catch(e => {
    // Evita excepciones si el usuario no interactuó previamente
  });
}

// Activar sonido global en todos los botones y elementos interactivos
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const esInteractivo = e.target.closest('button, a, .modelo-option, .btn-cat, .producto-card');
    if (esInteractivo) {
      reproducirClic();
    }
  });
});

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
  "gafas": {
    titulo: "Gafas Deportivas",
    precio: 8500,
    modelos: [
      { id: "gafas-1", nombre: "Gafas Modelo 1", img: "images/gafas/gafas-1.jpg", stock: { "Único": 1 } },
      { id: "gafas-2", nombre: "Gafas Modelo 2", img: "images/gafas/gafas-2.jpg", stock: { "Único": 1 } },
      { id: "gafas-3", nombre: "Gafas Modelo 3", img: "images/gafas/gafas-3.jpg", stock: { "Único": 1 } },
      { id: "gafas-4", nombre: "Gafas Modelo 4", img: "images/gafas/gafas-4.jpg", stock: { "Único": 1 } },
      { id: "gafas-5", nombre: "Gafas Modelo 5", img: "images/gafas/gafas-5.jpg", stock: { "Único": 1 } }
    ]
  },
  "auriculares-smartwatch": {
    titulo: "Auriculares & Smartwatch",
    precio: 15000,
    modelos: [
      { id: "smartwatch", nombre: "Smartwatch Deportivo", img: "images/auriculares y smartwatch/smartwatch.jpg", stock: { "Único": 1 } },
      { id: "auricular-2", nombre: "Auriculares Pro", img: "images/auriculares y smartwatch/auricular-2.jpg", stock: { "Único": 1 } },
      { id: "auricular-tws", nombre: "Auriculares TWS Green", img: "images/auriculares y smartwatch/auricular-tws.jpg", stock: { "Único": 1 } }
    ]
  },
  "boxers": {
    titulo: "Packs de Boxers Seleccionados",
    precio: 18000,
    modelos: [
      { id: "boxers-1", nombre: "Pack 1 - Azul/Blanco/Negro", img: "images/boxers/boxers-1.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-2", nombre: "Pack 2 - Negro/Gris/Azul", img: "images/boxers/boxers-2.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-3", nombre: "Pack 3 - Azul Claro/Negro", img: "images/boxers/boxers-3.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-4", nombre: "Pack 4 - Jordan/Nike", img: "images/boxers/boxers-4.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-5", nombre: "Pack 5 - Calvin Klein", img: "images/boxers/boxers-5.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } }
    ]
  },
  "gorras": {
    titulo: "Gorras Urbanas Premium",
    precio: 15000,
    modelos: [
      { id: "gorras-1", nombre: "Gorra 1 - NY Negra", img: "images/gorras/gorras-1.jpg", stock: { "Único": 1 } },
      { id: "gorras-2", nombre: "Gorra 2 - NY Roja", img: "images/gorras/gorras-2.jpg", stock: { "Único": 1 } },
      { id: "gorras-3", nombre: "Gorra 3 - LA Negra", img: "images/gorras/gorras-3.jpg", stock: { "Único": 1 } },
      { id: "gorras-4", nombre: "Gorra 4 - Patch Gris", img: "images/gorras/gorras-4.jpg", stock: { "Único": 1 } },
      { id: "gorras-5", nombre: "Gorra 5 - Urban Black", img: "images/gorras/gorras-5.jpg", stock: { "Único": 1 } },
      { id: "gorras-6", nombre: "Gorra 6 - FTX", img: "images/gorras/gorras-6.jpg", stock: { "Único": 1 } },
      { id: "gorras-7", nombre: "Gorra 7 - NY Beige", img: "images/gorras/gorras-7.jpg", stock: { "Único": 1 } },
      { id: "gorras-8", nombre: "Gorra 8 - NY Verde", img: "images/gorras/gorras-8.jpg", stock: { "Único": 1 } },
      { id: "gorras-9", nombre: "Gorra 9 - Warriors", img: "images/gorras/gorras-9.jpg", stock: { "Único": 1 } },
      { id: "gorras-10", nombre: "Gorra 10 - NY Marrón", img: "images/gorras/gorras-10.jpg", stock: { "Único": 1 } },
      { id: "gorras-11", nombre: "Gorra 11 - Bordo", img: "images/gorras/gorras-11.jpg", stock: { "Único": 1 } },
      { id: "gorras-12", nombre: "Gorra 12 - Jordan Roja", img: "images/gorras/gorras-12.jpg", stock: { "Único": 1 } },
      { id: "gorras-13", nombre: "Gorra 13 - Nets Blanca", img: "images/gorras/gorras-13.jpg", stock: { "Único": 1 } },
      { id: "gorras-14", nombre: "Gorra 14 - NY White", img: "images/gorras/gorras-14.jpg", stock: { "Único": 1 } },
      { id: "gorras-15", nombre: "Gorra 15 - Bordo Classic", img: "images/gorras/gorras-15.jpg", stock: { "Único": 1 } },
      { id: "gorras-16", nombre: "Gorra 16 - NY Naranja", img: "images/gorras/gorras-16.jpg", stock: { "Único": 1 } },
      { id: "gorras-17", nombre: "Gorra 17 - LA Dark", img: "images/gorras/gorras-17.jpg", stock: { "Único": 1 } },
      { id: "gorras-18", nombre: "Gorra 18 - Pro Grey", img: "images/gorras/gorras-18.jpg", stock: { "Único": 1 } },
      { id: "gorras-19", nombre: "Gorra 19 - All Black", img: "images/gorras/gorras-19.jpg", stock: { "Único": 1 } },
      { id: "gorras-20", nombre: "Gorra 20 - Raptors", img: "images/gorras/gorras-20.jpg", stock: { "Único": 1 } },
      { id: "gorras-21", nombre: "Gorra 21 - NY Camel", img: "images/gorras/gorras-21.jpg", stock: { "Único": 1 } },
      { id: "gorras-22", nombre: "Gorra 22 - NY Beige/Blue", img: "images/gorras/gorras-22.jpg", stock: { "Único": 1 } }
    ]
  },
  "remeras": {
    titulo: "Remeras Streetwear Variadas",
    precio: 22000,
    modelos: [
      { id: "remeras-1", nombre: "Remera 1 - BAPE / Stussy", img: "images/remeras/remeras-1.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-2", nombre: "Remera 2 - White Edition", img: "images/remeras/remeras-2.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-3", nombre: "Remera 3 - Stussy Negra", img: "images/remeras/remeras-3.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-4", nombre: "Remera 4 - Minimal Black", img: "images/remeras/remeras-4.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-5", nombre: "Remera 5 - Graphic Tee", img: "images/remeras/remeras-5.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-6", nombre: "Remera 6 - Dark Style", img: "images/remeras/remeras-6.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-7", nombre: "Remera 7 - Hooters Black", img: "images/remeras/remeras-7.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-8", nombre: "Remera 8 - White Urban", img: "images/remeras/remeras-8.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-9", nombre: "Remera 9 - Central Logo", img: "images/remeras/remeras-9.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-10", nombre: "Remera 10 - Jordan Black", img: "images/remeras/remeras-10.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-11", nombre: "Remera 11 - A Bathing Ape", img: "images/remeras/remeras-11.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-12", nombre: "Remera 12 - Honda Racing", img: "images/remeras/remeras-12.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-13", nombre: "Remera 13 - Pocket Tee", img: "images/remeras/remeras-13.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-14", nombre: "Remera 14 - White Clean", img: "images/remeras/remeras-14.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-15", nombre: "Remera 15 - Red Box Logo", img: "images/remeras/remeras-15.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-16", nombre: "Remera 16 - Stussy White", img: "images/remeras/remeras-16.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "remeras-17", nombre: "Remera 17 - Honda Wing", img: "images/remeras/remeras-17.jpg", stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } }
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
  
  // Actualizar la imagen principal del modal
  const imgPrincipal = document.getElementById('modal-img-principal');
  imgPrincipal.src = modeloSeleccionadoActual.img;
  imgPrincipal.alt = modeloSeleccionadoActual.nombre;

  // Actualizar la selección de miniaturas
  const options = document.querySelectorAll('.modelo-option');
  options.forEach((opt, i) => opt.classList.toggle('selected', i === index));

  // Cargar talles/variantes disponibles
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
    stockStatus.innerHTML = `<span class="cant-stock">Agotado en esta opción</span>`;
    stockStatus.classList.add('sin-stock');
    btnAdd.disabled = true;
    btnAdd.textContent = "Agotado";
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
    alert(`Solo queda ${stockDisponible} unidad disponible.`);
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
          <div class="cart-item-details">Variante: ${item.talle} | $${item.precio.toLocaleString('es-AR')} x ${item.quantity}</div>
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
    message += `• ${item.nombre} - Variante/Talle ${item.talle} (x${item.quantity}) = $${(item.precio * item.quantity).toLocaleString('es-AR')}\n`;
    total += item.precio * item.quantity;
  });

  message += `\n*Total a pagar: $${total.toLocaleString('es-AR')}*`;
  message += "\n\n¿Me podrías enviar el link de Mercado Pago para pagar con Tarjeta de Crédito/Débito?";

  window.open(`https://wa.me/5493834287709?text=${encodeURIComponent(message)}`, '_blank');
}

// Efecto de Zoom interactivo en la vista previa del Modal
document.addEventListener('DOMContentLoaded', () => {
  const previewContainer = document.querySelector('.modal-preview-container');
  const previewImg = document.querySelector('#modal-img-principal');

  if (previewContainer && previewImg) {
    previewContainer.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = previewContainer.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      previewImg.style.transformOrigin = `${x}% ${y}%`;
    });

    previewContainer.addEventListener('mouseleave', () => {
      previewImg.style.transformOrigin = 'center center';
    });
  }
});