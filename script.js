// Base de datos completa con todos los archivos reales de las carpetas
const productosDB = {
  "conjuntos-deportivos": [
    { id: "c1", nombre: "Conjunto Arsenal FC", precio: 45000, img: "images/conjuntos deportivos/conjunto-arsenal.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c2", nombre: "Conjunto FC Barcelona", precio: 45000, img: "images/conjuntos deportivos/conjunto-barsa.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c3", nombre: "Conjunto Flamengo", precio: 45000, img: "images/conjuntos deportivos/conjunto-flamengo.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c4", nombre: "Conjunto Selección Francia", precio: 45000, img: "images/conjuntos deportivos/conjunto-francia.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c5", nombre: "Conjunto Italia", precio: 45000, img: "images/conjuntos deportivos/conjunto-italia.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c6", nombre: "Conjunto Manchester City", precio: 45000, img: "images/conjuntos deportivos/conjunto-mancity.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c7", nombre: "Conjunto Manchester United", precio: 45000, img: "images/conjuntos deportivos/conjunto-manutd.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c8", nombre: "Conjunto Real Madrid", precio: 45000, img: "images/conjuntos deportivos/conjunto-realmadrid.jpg", talles: ["S", "M", "L", "XL"] }
  ],
  "remeras": Array.from({ length: 17 }, (_, i) => ({
    id: `r${i + 1}`,
    nombre: `Remera Urban Model ${i + 1}`,
    precio: 20000,
    img: `images/remeras/remeras-${i + 1}.jpg`,
    talles: ["1", "2", "3", "4"]
  })),
  "gorras": Array.from({ length: 22 }, (_, i) => ({
    id: `g${i + 1}`,
    nombre: `Gorra Urbana Model ${i + 1}`,
    precio: 15000,
    img: `images/gorras/gorras-${i + 1}.jpg`,
    talles: ["Único"]
  })),
  "boxers": Array.from({ length: 5 }, (_, i) => ({
    id: `b${i + 1}`,
    nombre: `Pack x3 Boxers Model ${i + 1}`,
    precio: 12000,
    img: `images/boxers/boxers-${i + 1}.jpg`,
    talles: ["M", "L", "XL", "XXL"]
  })),
  "gafas": [
    { id: "gf1", nombre: "Gafas Sport Model 1", precio: 8500, img: "images/gafas/gafas-1.jpg", talles: ["Único"] },
    { id: "gf2", nombre: "Gafas Sport Model 2", precio: 8500, img: "images/gafas/gafas-2.jpg", talles: ["Único"] },
    { id: "gf3", nombre: "Gafas Sport Model 3", precio: 8500, img: "images/gafas/gafas-3.jpg", talles: ["Único"] },
    { id: "gf4", nombre: "Gafas Sport Model 5", precio: 8500, img: "images/gafas/gafas-5.jpg", talles: ["Único"] }
  ],
  "auriculares-smartwatch": [
    { id: "sw1", nombre: "Auricular Sport 2", precio: 15000, img: "images/auriculares y smartwatch/auricular-2.jpg", talles: ["Blanco"] },
    { id: "sw2", nombre: "Auriculares TWS", precio: 15000, img: "images/auriculares y smartwatch/auricular-tws.jpg", talles: ["Blanco", "Verde"] },
    { id: "sw3", nombre: "Smartwatch Ultra", precio: 20000, img: "images/auriculares y smartwatch/smartwatch.jpg", talles: ["Negro", "Naranja"] }
  ],
  "liquidacion": [
    { id: "l1", nombre: "Buzo Urban Off", precio: 15000, img: "images/liquidacion/buzo-1.jpg", talles: ["L", "XL"] },
    { id: "l2", nombre: "Campera Black Edition 1", precio: 15000, img: "images/liquidacion/campera-1.jpg", talles: ["M", "L", "XL"] },
    { id: "l3", nombre: "Campera Model 2", precio: 15000, img: "images/liquidacion/campera-2.jpg", talles: ["L", "XL"] },
    { id: "l4", nombre: "Campera White-Black 3", precio: 15000, img: "images/liquidacion/campera-3.jpg", talles: ["M", "L"] },
    { id: "l5", nombre: "Campera White 4", precio: 15000, img: "images/liquidacion/campera-4.jpg", talles: ["M", "L", "XL"] },
    { id: "l6", nombre: "Campera Dark 5", precio: 15000, img: "images/liquidacion/campera-5.jpg", talles: ["S", "M"] },
    { id: "l7", nombre: "Campera Navy 6", precio: 15000, img: "images/liquidacion/campera-6.jpg", talles: ["L", "XL"] },
    { id: "l8", nombre: "Campera Olive 7", precio: 15000, img: "images/liquidacion/campera-7.jpg", talles: ["M", "L"] },
    { id: "l9", nombre: "Campera Street 8", precio: 15000, img: "images/liquidacion/campera-8.jpg", talles: ["L", "XL"] },
    { id: "l10", nombre: "Campera Matte Black 9", precio: 15000, img: "images/liquidacion/campera-9.jpg", talles: ["M", "L"] },
    { id: "l11", nombre: "Campera Puffer 10", precio: 15000, img: "images/liquidacion/campera-10.jpg", talles: ["L", "XL"] },
    { id: "l12", nombre: "Campera Red 11", precio: 15000, img: "images/liquidacion/campera-11.jpg", talles: ["S", "M", "L"] },
    { id: "l13", nombre: "Campera College 12", precio: 15000, img: "images/liquidacion/campera-12.jpg", talles: ["M", "L"] },
    { id: "l14", nombre: "Campera Dark 13", precio: 15000, img: "images/liquidacion/campera-13.jpg", talles: ["L", "XL"] },
    { id: "l15", nombre: "Chaleco Neon Green 1", precio: 15000, img: "images/liquidacion/chaleco-1.jpg", talles: ["M", "L"] },
    { id: "l16", nombre: "Chaleco Lime 2", precio: 15000, img: "images/liquidacion/chaleco-2.jpg", talles: ["M", "L", "XL"] },
    { id: "l17", nombre: "Chaleco Bicolor 3", precio: 15000, img: "images/liquidacion/chaleco-3.jpg", talles: ["L", "XL"] },
    { id: "l18", nombre: "Chaleco Dark Red 4", precio: 15000, img: "images/liquidacion/chaleco-4.jpg", talles: ["M", "L"] },
    { id: "l19", nombre: "Conjunto Urban 1", precio: 18000, img: "images/liquidacion/conjunto-1.jpg", talles: ["S", "M", "L"] },
    { id: "l20", nombre: "Conjunto Urban 2", precio: 18000, img: "images/liquidacion/conjunto-2.jpg", talles: ["M", "L"] },
    { id: "l21", nombre: "Conjunto Urban 3", precio: 18000, img: "images/liquidacion/conjunto-3.jpg", talles: ["L", "XL"] },
    { id: "l22", nombre: "Conjunto Urban 4", precio: 18000, img: "images/liquidacion/conjunto-4.jpg", talles: ["M", "L"] },
    { id: "l23", nombre: "Pantalón Jogger 1", precio: 12000, img: "images/liquidacion/pantalon-1.jpg", talles: ["1", "2", "3", "4"] },
    { id: "l24", nombre: "Pantalón Jogger Grey 2", precio: 12000, img: "images/liquidacion/pantalon-2.jpg", talles: ["1", "2", "3"] },
    { id: "l25", nombre: "Remera Malvinas Selección", precio: 10000, img: "images/liquidacion/remera-seleccion-malvinas.jpg", talles: ["S", "M", "L", "XL"] }
  ]
};

let carrito = [];
let productoSeleccionado = null;
const NUMERO_WHATSAPP = "5493834287709";

// Renderizar todos los productos de la categoría seleccionada
function filtrarCategoria(categoria, e) {
  document.querySelectorAll('.btn-cat').forEach(btn => btn.classList.remove('active'));
  if (e) e.target.classList.add('active');

  const catalogo = document.getElementById('catalogo');
  catalogo.innerHTML = '';

  let productosAMostrar = [];

  if (categoria === 'todos') {
    Object.values(productosDB).forEach(lista => {
      productosAMostrar = productosAMostrar.concat(lista);
    });
  } else if (productosDB[categoria]) {
    productosAMostrar = productosDB[categoria];
  }

  // Generar cada tarjeta individual directamente en pantalla
  productosAMostrar.forEach(prod => {
    const card = document.createElement('article');
    card.className = 'producto-card';
    card.onclick = () => abrirDetalleProducto(prod);

    card.innerHTML = `
      <div class="img-container">
        <img src="${prod.img}" alt="${prod.nombre}">
      </div>
      <div class="prod-detalles">
        <h3>${prod.nombre}</h3>
        <p class="precio">$${prod.precio.toLocaleString('es-AR')}</p>
        <button class="btn-elegir">Ver Detalle / Comprar</button>
      </div>
    `;
    catalogo.appendChild(card);
  });
}

// Abrir el modal con la foto a la izquierda y la información + agregar al carrito al costado
function abrirDetalleProducto(prod) {
  productoSeleccionado = prod;

  const feed = document.getElementById('modal-feed-imagenes');
  feed.innerHTML = `<img src="${prod.img}" alt="${prod.nombre}">`;

  document.getElementById('modal-titulo').innerText = prod.nombre;
  document.getElementById('modal-precio').innerText = `$${prod.precio.toLocaleString('es-AR')}`;

  const selectTalle = document.getElementById('modal-talle');
  selectTalle.innerHTML = '';
  prod.talles.forEach(talle => {
    const opt = document.createElement('option');
    opt.value = talle;
    opt.innerText = talle;
    selectTalle.appendChild(opt);
  });

  document.getElementById('modal-cant').value = 1;
  document.getElementById('modal-producto').classList.add('active');
}

function cerrarModal() {
  document.getElementById('modal-producto').classList.remove('active');
}

// Agregar al carrito desde el modal
function agregarAlCarritoDesdeModal() {
  if (!productoSeleccionado) return;

  const talle = document.getElementById('modal-talle').value;
  const cantidad = parseInt(document.getElementById('modal-cant').value);

  const itemExistente = carrito.find(item => item.id === productoSeleccionado.id && item.talle === talle);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({
      id: productoSeleccionado.id,
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      img: productoSeleccionado.img,
      talle: talle,
      cantidad: cantidad
    });
  }

  actualizarCarritoUI();
  cerrarModal();
  toggleCart();
}

// Alternar visibilidad del carrito lateral
function toggleCart() {
  document.getElementById('cart-drawer').classList.toggle('active');
  document.getElementById('cart-overlay').classList.toggle('active');
}

// Actualizar interfaz del carrito
function actualizarCarritoUI() {
  const container = document.getElementById('cart-items');
  const countEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('cart-total-price');

  container.innerHTML = '';

  let totalItems = 0;
  let totalPrice = 0;

  if (carrito.length === 0) {
    container.innerHTML = '<p class="cart-empty-text">El carrito está vacío</p>';
  } else {
    carrito.forEach((item, index) => {
      totalItems += item.cantidad;
      totalPrice += item.precio * item.cantidad;

      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.nombre}">
        <div class="cart-item-details">
          <h4>${item.nombre}</h4>
          <p>Talle: ${item.talle} | Cant: ${item.cantidad}</p>
          <p class="precio">$${(item.precio * item.cantidad).toLocaleString('es-AR')}</p>
        </div>
        <button class="cart-remove-btn" onclick="eliminarDelCarrito(${index})">✕</button>
      `;
      container.appendChild(div);
    });
  }

  countEl.innerText = totalItems;
  totalEl.innerText = `$${totalPrice.toLocaleString('es-AR')}`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarritoUI();
}

// Finalizar pedido enviando todo el carrito por WhatsApp
function checkoutWhatsApp() {
  if (carrito.length === 0) return;

  let mensaje = "Hola! Quiero realizar el siguiente pedido:%0A%0A";
  let total = 0;

  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    mensaje += `• *${item.nombre}*%0A  Talle: ${item.talle} | Cant: ${item.cantidad} | Subtotal: $${subtotal.toLocaleString('es-AR')}%0A`;
  });

  mensaje += `%0A*Total General: $${total.toLocaleString('es-AR')}*`;

  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, '_blank');
}

// Cargar productos al inicio
document.addEventListener('DOMContentLoaded', () => {
  filtrarCategoria('todos');
});