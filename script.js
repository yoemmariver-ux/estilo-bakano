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
    const esInteractivo = e.target.closest('button, a, .modelo-option, .btn-cat, .producto-card, .nav-arrow');
    if (esInteractivo) {
      reproducirClic();
    }
  });

  // Toggle de Zoom al hacer clic sobre la imagen principal
  const imgPrincipal = document.getElementById('modal-img-principal');
  if (imgPrincipal) {
    imgPrincipal.addEventListener('click', (e) => {
      e.stopPropagation(); // Evitar comportamientos no deseados
      imgPrincipal.classList.toggle('zoomed');
    });
  }
});

// Catálogo centralizado
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
    modelos: Array.from({ length: 22 }, (_, i) => ({
      id: `gorras-${i + 1}`,
      nombre: `Gorra Modelo ${i + 1}`,
      img: `images/gorras/gorras-${i + 1}.jpg`,
      stock: { "Único": 1 }
    }))
  },
  "remeras": {
    titulo: "Remeras Streetwear Variadas",
    precio: 22000,
    modelos: Array.from({ length: 17 }, (_, i) => ({
      id: `remeras-${i + 1}`,
      nombre: `Remera Modelo ${i + 1}`,
      img: `images/remeras/remeras-${i + 1}.jpg`,
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
  document.getElementById('modal-precio').textContent = `$${categoriaActual.precio.toLocaleString('es-AR')}`;

  actualizarVisor();
  document.getElementById('modal-producto').classList.add('active');
  document.addEventListener('keydown', manejarTeclasNavegacion);
}

function cambiarImagen(direccion, event) {
  if (event) event.stopPropagation(); // Evita gatillar el clic de zoom
  if (!categoriaActual) return;
  
  // Quitar el zoom si la imagen cambia
  const imgPrincipal = document.getElementById('modal-img-principal');
  if (imgPrincipal) imgPrincipal.classList.remove('zoomed');

  const total = categoriaActual.modelos.length;
  indexModeloActual = (indexModeloActual + direccion + total) % total;
  actualizarVisor();
}

function actualizarVisor() {
  const modelo = categoriaActual.modelos[indexModeloActual];
  
  const imgPrincipal = document.getElementById('modal-img-principal');
  imgPrincipal.src = modelo.img;
  imgPrincipal.alt = modelo.nombre;

  document.getElementById('modal-modelo-nombre').textContent = modelo.nombre;
  document.getElementById('modal-counter').textContent = `${indexModeloActual + 1} / ${categoriaActual.modelos.length}`;

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
  const imgPrincipal = document.getElementById('modal-img-principal');
  if (imgPrincipal) imgPrincipal.classList.remove('zoomed');
  document.getElementById('modal-producto').classList.remove('active');
  document.removeEventListener('keydown', manejarTeclasNavegacion);
}

function manejarTeclasNavegacion(e) {
  if (e.key === 'ArrowLeft') cambiarImagen(-1);
  if (e.key === 'ArrowRight') cambiarImagen(1);
  if (e.key === 'Escape') cerrarModal();
}

function agregarAlCarritoDesdeModal() {
  const modelo = categoriaActual.modelos[indexModeloActual];
  const talleSel = document.getElementById('modal-talle').value;
  const inputCant = document.getElementById('modal-cant');
  const cantidadPedida = parseInt(inputCant.value) || 1;
  const stockDisponible = modelo.stock[talleSel];

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
      precio: categoriaActual.precio,
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