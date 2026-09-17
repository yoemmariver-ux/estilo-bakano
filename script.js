// Carga del sonido de clic
const clickAudio = new Audio('sounds/click.mp3');

function reproducirClic() {
  clickAudio.currentTime = 0;
  clickAudio.play().catch(() => {});
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const esInteractivo = e.target.closest('button, a, .modelo-option, .btn-cat, .producto-card');
    if (esInteractivo) {
      reproducirClic();
    }
  });
});

// Catálogo centralizado con precios actualizados
const catalogoData = {
  "liquidacion": {
    titulo: "🔥 LIQUIDACIÓN OPORTUNIDAD 🔥",
    precioBase: 15000,
    modelos: [
      { id: "buzo-1", nombre: "Buzo Liquidación 1", img: "images/liquidacion/buzo-1.jpg", precio: 15000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-1", nombre: "Campera Liquidación 1", img: "images/liquidacion/campera-1.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-1-modelo", nombre: "Campera Modelo Liquidación 1", img: "images/liquidacion/campera-1-modelo.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-2", nombre: "Campera Liquidación 2", img: "images/liquidacion/campera-2.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-2-modelo", nombre: "Campera Modelo Liquidación 2", img: "images/liquidacion/campera-2-modelo.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-3", nombre: "Campera Liquidación 3", img: "images/liquidacion/campera-3.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-4", nombre: "Campera Liquidación 4", img: "images/liquidacion/campera-4.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-5", nombre: "Campera Liquidación 5", img: "images/liquidacion/campera-5.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-6", nombre: "Campera Liquidación 6", img: "images/liquidacion/campera-6.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-7", nombre: "Campera Liquidación 7", img: "images/liquidacion/campera-7.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-8", nombre: "Campera Liquidación 8", img: "images/liquidacion/campera-8.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-9", nombre: "Campera Liquidación 9", img: "images/liquidacion/campera-9.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-10", nombre: "Campera Liquidación 10", img: "images/liquidacion/campera-10.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-11", nombre: "Campera Liquidación 11", img: "images/liquidacion/campera-11.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-12", nombre: "Campera Liquidación 12", img: "images/liquidacion/campera-12.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "campera-13", nombre: "Campera Liquidación 13", img: "images/liquidacion/campera-13.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "chaleco-1", nombre: "Chaleco Liquidación 1", img: "images/liquidacion/chaleco-1.jpg", precio: 20000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "chaleco-2", nombre: "Chaleco Liquidación 2", img: "images/liquidacion/chaleco-2.jpg", precio: 20000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "chaleco-3", nombre: "Chaleco Liquidación 3", img: "images/liquidacion/chaleco-3.jpg", precio: 20000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "chaleco-4", nombre: "Chaleco Liquidación 4", img: "images/liquidacion/chaleco-4.jpg", precio: 20000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "conjunto-1", nombre: "Conjunto Liquidación 1", img: "images/liquidacion/conjunto-1.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "conjunto-2", nombre: "Conjunto Liquidación 2", img: "images/liquidacion/conjunto-2.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "conjunto-3", nombre: "Conjunto Liquidación 3", img: "images/liquidacion/conjunto-3.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "conjunto-4", nombre: "Conjunto Liquidación 4", img: "images/liquidacion/conjunto-4.jpg", precio: 40000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "pantalon-1", nombre: "Pantalón Liquidación 1", img: "images/liquidacion/pantalon-1.jpg", precio: 20000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "pantalon-2", nombre: "Pantalón Liquidación 2", img: "images/liquidacion/pantalon-2.jpg", precio: 20000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "remera-seleccion-malvinas", nombre: "Remera Selección Malvinas", img: "images/liquidacion/remera-seleccion-malvinas.jpg", precio: 20000, stock: { S: 1, M: 1, L: 1, XL: 1 } }
    ]
  },
  "conjuntos-deportivos": {
    titulo: "Conjuntos Deportivos de Fútbol",
    precio: 45000,
    modelos: [
      { id: "arsenal", nombre: "Arsenal FC", img: "images/conjuntos deportivos/conjunto-arsenal.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "barsa", nombre: "FC Barcelona", img: "images/conjuntos deportivos/conjunto-barsa.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "flamengo", nombre: "Flamengo", img: "images/conjuntos deportivos/conjunto-flamengo.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "francia", nombre: "Selección Francia", img: "images/conjuntos deportivos/conjunto-francia.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "italia", nombre: "Selección Italia", img: "images/conjuntos deportivos/conjunto-italia.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "mancity", nombre: "Manchester City", img: "images/conjuntos deportivos/conjunto-mancity.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "manutd", nombre: "Manchester United", img: "images/conjuntos deportivos/conjunto-manutd.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } },
      { id: "realmadrid", nombre: "Real Madrid", img: "images/conjuntos deportivos/conjunto-realmadrid.jpg", precio: 45000, stock: { S: 1, M: 1, L: 1, XL: 1 } }
    ]
  },
  "gafas": {
    titulo: "Gafas Deportivas",
    precio: 8500,
    modelos: [
      { id: "gafas-1", nombre: "Gafas Modelo 1", img: "images/gafas/gafas-1.jpg", precio: 8500, stock: { "Único": 1 } },
      { id: "gafas-2", nombre: "Gafas Modelo 2", img: "images/gafas/gafas-2.jpg", precio: 8500, stock: { "Único": 1 } },
      { id: "gafas-3", nombre: "Gafas Modelo 3", img: "images/gafas/gafas-3.jpg", precio: 8500, stock: { "Único": 1 } },
      { id: "gafas-4", nombre: "Gafas Modelo 4", img: "images/gafas/gafas-4.jpg", precio: 8500, stock: { "Único": 1 } },
      { id: "gafas-5", nombre: "Gafas Modelo 5", img: "images/gafas/gafas-5.jpg", precio: 8500, stock: { "Único": 1 } }
    ]
  },
  "auriculares-smartwatch": {
    titulo: "Auriculares & Smartwatch",
    precioBase: 15000,
    modelos: [
      { id: "smartwatch", nombre: "Smartwatch Deportivo", img: "images/auriculares y smartwatch/smartwatch.jpg", precio: 20000, stock: { "Único": 1 } },
      { id: "auricular-2", nombre: "Auriculares Pro", img: "images/auriculares y smartwatch/auricular-2.jpg", precio: 15000, stock: { "Único": 1 } },
      { id: "auricular-tws", nombre: "Auriculares TWS Green", img: "images/auriculares y smartwatch/auricular-tws.jpg", precio: 15000, stock: { "Único": 1 } }
    ]
  },
  "boxers": {
    titulo: "Packs de Boxers Seleccionados",
    precio: 12000,
    modelos: [
      { id: "boxers-1", nombre: "Pack 1 - Azul/Blanco/Negro", img: "images/boxers/boxers-1.jpg", precio: 12000, stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-2", nombre: "Pack 2 - Negro/Gris/Azul", img: "images/boxers/boxers-2.jpg", precio: 12000, stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-3", nombre: "Pack 3 - Azul Claro/Negro", img: "images/boxers/boxers-3.jpg", precio: 12000, stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-4", nombre: "Pack 4 - Jordan/Nike", img: "images/boxers/boxers-4.jpg", precio: 12000, stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } },
      { id: "boxers-5", nombre: "Pack 5 - Calvin Klein", img: "images/boxers/boxers-5.jpg", precio: 12000, stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 } }
    ]
  },
  "gorras": {
    titulo: "Gorras Urbanas Premium",
    precio: 15000,
    modelos: Array.from({ length: 22 }, (_, i) => ({
      id: `gorras-${i + 1}`,
      nombre: `Gorra Modelo ${i + 1}`,
      img: `images/gorras/gorras-${i + 1}.jpg`,
      precio: 15000,
      stock: { "Único": 1 }
    }))
  },
  "remeras": {
    titulo: "Remeras Streetwear Variadas",
    precio: 20000,
    modelos: Array.from({ length: 17 }, (_, i) => ({
      id: `remeras-${i + 1}`,
      nombre: `Remera Modelo ${i + 1}`,
      img: `images/remeras/remeras-${i + 1}.jpg`,
      precio: 20000,
      stock: { S: 1, M: 1, L: 1, XL: 1, XXL: 1 }
    }))
  }
};

let cart = [];
let categoriaActual = null;
let indexModeloActual = 0;

function abrirVisorCategoria(categoriaKey) {
  categoriaActual = catalogoData[categoriaKey];
  if (!categoriaActual || !categoriaActual.modelos.length) return;

  indexModeloActual = 0;
  
  document.getElementById('modal-titulo').textContent = categoriaActual.titulo;

  const selectModelo = document.getElementById('modal-modelo-select');
  selectModelo.innerHTML = '';
  categoriaActual.modelos.forEach((mod, idx) => {
    const opt = document.createElement('option');
    opt.value = idx;
    opt.textContent = mod.nombre;
    selectModelo.appendChild(opt);
  });

  const feedContainer = document.getElementById('modal-feed-imagenes');
  feedContainer.innerHTML = '';

  categoriaActual.modelos.forEach((modelo, index) => {
    const imgEl = document.createElement('img');
    imgEl.src = modelo.img;
    imgEl.alt = modelo.nombre;
    imgEl.dataset.index = index;
    if (index === 0) imgEl.classList.add('img-seleccionada');

    imgEl.addEventListener('click', () => {
      seleccionarModeloPorIndice(index);
    });

    feedContainer.appendChild(imgEl);
  });

  feedContainer.scrollTop = 0;

  actualizarVisor();
  document.getElementById('modal-producto').classList.add('active');
  document.addEventListener('keydown', manejarTeclasNavegacion);
}

function seleccionarModeloPorIndice(idx) {
  indexModeloActual = idx;
  document.getElementById('modal-modelo-select').value = idx;

  const imagenes = document.querySelectorAll('#modal-feed-imagenes img');
  imagenes.forEach((img, i) => {
    if (i === idx) {
      img.classList.add('img-seleccionada');
    } else {
      img.classList.remove('img-seleccionada');
    }
  });

  actualizarVisor();
}

function alCambiarModelo() {
  const selectModelo = document.getElementById('modal-modelo-select');
  const idx = parseInt(selectModelo.value);
  seleccionarModeloPorIndice(idx);

  const imagenes = document.querySelectorAll('#modal-feed-imagenes img');
  if (imagenes[idx]) {
    imagenes[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function actualizarVisor() {
  const modelo = categoriaActual.modelos[indexModeloActual];
  
  document.getElementById('modal-modelo-nombre').textContent = modelo.nombre;
  
  const precioMostrar = modelo.precio || categoriaActual.precio;
  document.getElementById('modal-precio').textContent = `$${precioMostrar.toLocaleString('es-AR')}`;

  const selectTalle = document.getElementById('modal-talle');
  selectTalle.innerHTML = '';

  for (const [talle, cant] of Object.entries(modelo.stock)) {
    const opt = document.createElement('option');
    opt.value = talle;
    opt.textContent = `${talle} ${cant === 0 ? '(Agotado)' : ''}`;
    selectTalle.appendChild(opt);
  }

  actualizarStockModal();
}

function actualizarStockModal() {
  const modelo = categoriaActual.modelos[indexModeloActual];
  const talleSel = document.getElementById('modal-talle').value;
  const stockDisponible = modelo.stock[talleSel] || 0;

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
  document.removeEventListener('keydown', manejarTeclasNavegacion);
}

function manejarTeclasNavegacion(e) {
  if (e.key === 'Escape') cerrarModal();
}

function agregarAlCarritoDesdeModal() {
  const modelo = categoriaActual.modelos[indexModeloActual];
  const talleSel = document.getElementById('modal-talle').value;
  const inputCant = document.getElementById('modal-cant');
  const cantidadPedida = parseInt(inputCant.value) || 1;
  const stockDisponible = modelo.stock[talleSel];
  const precioUnitario = modelo.precio || categoriaActual.precio;

  if (cantidadPedida > stockDisponible) {
    alert(`Solo queda ${stockDisponible} unidad disponible.`);
    return;
  }

  modelo.stock[talleSel] -= cantidadPedida;

  const itemKey = `${modelo.nombre} (${talleSel})`;
  const itemExistente = cart.find(i => i.key === itemKey);

  if (itemExistente) {
    itemExistente.quantity += cantidadPedida;
  } else {
    cart.push({
      key: itemKey,
      nombre: modelo.nombre,
      precio: precioUnitario,
      talle: talleSel,
      quantity: cantidadPedida,
      modeloRef: modelo
    });
  }

  actualizarStockModal();
  updateCartUI();
  toggleCart();
}

function removeFromCart(key) {
  const item = cart.find(i => i.key === key);
  if (item) {
    item.modeloRef.stock[item.talle] += item.quantity;
  }
  cart = cart.filter(i => i.key !== key);
  updateCartUI();
  if (categoriaActual) actualizarStockModal();
}

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

function filtrarCategoria(categoria, event) {
  const cards = document.querySelectorAll('.producto-card');
  document.querySelectorAll('.btn-cat').forEach(b => b.classList.remove('active'));
  if (event) event.target.classList.add('active');

  cards.forEach(card => {
    card.style.display = (categoria === 'todos' || card.dataset.categoria === categoria) ? 'flex' : 'none';
  });
}

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