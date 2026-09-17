// Base de datos de productos por categoría
const productosDB = {
  "conjuntos-deportivos": [
    { id: "c1", nombre: "Conjunto Real Madrid", precio: 45000, img: "images/conjuntos deportivos/conjunto-realmadrid.jpg", talles: ["S", "M", "L", "XL"] },
    { id: "c2", nombre: "Conjunto Arsenal FC", precio: 45000, img: "images/conjuntos deportivos/conjunto-arsenal.jpg", talles: ["M", "L", "XL"] },
    { id: "c3", nombre: "Conjunto Bayern Munich", precio: 45000, img: "images/conjuntos deportivos/conjunto-bayern.jpg", talles: ["S", "M", "L"] }
  ],
  "remeras": [
    { id: "r1", nombre: "Remera Oversize Black", precio: 20000, img: "images/remeras/remeras-1.jpg", talles: ["1", "2", "3", "4"] },
    { id: "r2", nombre: "Remera Urban White", precio: 20000, img: "images/remeras/remeras-2.jpg", talles: ["1", "2", "3"] }
  ],
  "gorras": [
    { id: "g1", nombre: "Gorra NY Curved", precio: 15000, img: "images/gorras/gorras-1.jpg", talles: ["Único"] },
    { id: "g2", nombre: "Gorra LA Black", precio: 15000, img: "images/gorras/gorras-2.jpg", talles: ["Único"] }
  ],
  "boxers": [
    { id: "b1", nombre: "Pack x3 Boxers Calvin", precio: 12000, img: "images/boxers/boxers-1.jpg", talles: ["M", "L", "XL", "XXL"] }
  ],
  "gafas": [
    { id: "gf1", nombre: "Gafas de Sol Sport", precio: 8500, img: "images/gafas/gafas-1.jpg", talles: ["Único"] }
  ],
  "auriculares-smartwatch": [
    { id: "sw1", nombre: "Smartwatch Ultra", precio: 20000, img: "images/auriculares y smartwatch/smartwatch.jpg", talles: ["Negro", "Naranja"] }
  ],
  "liquidacion": [
    { id: "l1", nombre: "Campera Urban Off", precio: 15000, img: "images/liquidacion/campera-1.jpg", talles: ["L", "XL"] }
  ]
};

let productoSeleccionado = null;
const NUMERO_WHATSAPP = "5493834287709";

// Renderizar productos en la grilla principal según la categoría seleccionada
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

// Abrir el modal con la imagen a la izquierda y las opciones al costado
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

// Envío directo a WhatsApp con los datos elegidos
function comprarModalWhatsApp() {
  if (!productoSeleccionado) return;

  const talle = document.getElementById('modal-talle').value;
  const cantidad = document.getElementById('modal-cant').value;
  const total = productoSeleccionado.precio * cantidad;

  const mensaje = `Hola! Quiero comprar este producto:%0A` +
    `- *Producto:* ${productoSeleccionado.nombre}%0A` +
    `- *Talle/Opción:* ${talle}%0A` +
    `- *Cantidad:* ${cantidad}%0A` +
    `- *Total:* $${total.toLocaleString('es-AR')}`;

  window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`, '_blank');
}

// Cargar catálogo inicial al abrir la página
document.addEventListener('DOMContentLoaded', () => {
  filtrarCategoria('todos');
});