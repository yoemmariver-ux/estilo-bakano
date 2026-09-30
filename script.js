// Base de datos de productos
const productos = [
  // --- REMERAS (1 a 47 - $20.000, con remera-37 en oferta) ---
  ...Array.from({ length: 36 }, (_, i) => ({
    id: `rem-${i + 1}`,
    titulo: `Remera Streetwear #${i + 1}`,
    precio: 20000,
    categoria: "remeras",
    imagenes: [`images/remeras/remeras-${i + 1}.jpg`],
    talles: ["S", "M", "L", "XL", "XXL"]
  })),
  {
    id: "rem-37",
    titulo: "Remera Streetwear #37 (Oferta)",
    precio: 15000,
    categoria: "remeras",
    imagenes: ["images/remeras/remeras-37.jpg"],
    talles: ["S", "M", "L", "XL"]
  },
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `rem-${i + 38}`,
    titulo: `Remera Streetwear #${i + 38}`,
    precio: 20000,
    categoria: "remeras",
    imagenes: [`images/remeras/remeras-${i + 38}.jpg`],
    talles: ["S", "M", "L", "XL", "XXL"]
  })),

  // --- CHOMBAS (1 a 4 - $25.000) ---
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `chomba-${i + 1}`,
    titulo: `Chomba Urbana #${i + 1}`,
    precio: 25000,
    categoria: "chombas",
    imagenes: [`images/chombas/chombas-${i + 1}.jpg`],
    talles: ["S", "M", "L", "XL"]
  })),

  // --- GORRAS (1 a 37 - $15.000) ---
  ...Array.from({ length: 37 }, (_, i) => ({
    id: `gor-${i + 1}`,
    titulo: `Gorra Urbana #${i + 1}`,
    precio: 15000,
    categoria: "gorras",
    imagenes: [`images/gorras/gorras-${i + 1}.jpg`],
    talles: ["Único (Ajustable)"]
  })),

  // --- CONJUNTOS DEPORTIVOS ($45.000) ---
  { id: "conj-arsenal", titulo: "Conjunto Deportivo Arsenal", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-arsenal.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-barsa", titulo: "Conjunto Deportivo Barcelona", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-barsa.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-chelsea", titulo: "Conjunto Deportivo Chelsea", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-chelsea.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-flamengo", titulo: "Conjunto Deportivo Flamengo", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-flamengo.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-francia", titulo: "Conjunto Deportivo Selección Francia", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-francia.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-italia", titulo: "Conjunto Deportivo Selección Italia", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-italia.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-mancity", titulo: "Conjunto Deportivo Manchester City", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-mancity.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-manutd", titulo: "Conjunto Deportivo Manchester United", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-manutd.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-nike", titulo: "Conjunto Deportivo Nike", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-nike.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-realmadrid", titulo: "Conjunto Deportivo Real Madrid", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["images/conjuntos deportivos/conjunto-realmadrid.jpg"], talles: ["S", "M", "L", "XL"] },

  // --- LIQUIDACIÓN (Buzos, Camperas y Chalecos) ---
  ...Array.from({ length: 14 }, (_, i) => ({
    id: `buzo-${i + 1}`,
    titulo: `Buzo Oversize Urbano #${i + 1}`,
    precio: 15000,
    categoria: "liquidacion",
    esLiquidacion: true,
    imagenes: [`images/liquidacion/buzo-${i + 1}.jpg`],
    talles: ["M", "L", "XL"]
  })),
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `camp-${i + 1}`,
    titulo: `Campera Streetwear #${i + 1}`,
    precio: 40000,
    categoria: "liquidacion",
    esLiquidacion: true,
    imagenes: [`images/liquidacion/campera-${i + 1}.jpg`],
    talles: ["M", "L", "XL"]
  })),
  ...Array.from({ length: 4 }, (_, i) => ({
    id: `chal-${i + 1}`,
    titulo: `Chaleco Inflable #${i + 1}`,
    precio: 22000,
    categoria: "liquidacion",
    esLiquidacion: true,
    imagenes: [`images/liquidacion/chaleco-${i + 1}.jpg`],
    talles: ["M", "L", "XL"]
  })),

  // --- BOXERS ($12.000) ---
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `box-${i + 1}`,
    titulo: `Pack Boxers Estilo Bakano #${i + 1}`,
    precio: 12000,
    categoria: "boxers",
    imagenes: [`images/boxers/boxers-${i + 1}.jpg`],
    talles: ["M", "L", "XL"]
  })),

  // --- GAFAS ($9.500) ---
  { id: "gaf-1", titulo: "Gafas de Sol Urban Style #1", precio: 9500, categoria: "gafas", imagenes: ["images/gafas/gafas-1.jpg"], talles: ["Único"] },
  { id: "gaf-2", titulo: "Gafas de Sol Urban Style #2", precio: 9500, categoria: "gafas", imagenes: ["images/gafas/gafas-2.jpg"], talles: ["Único"] },
  { id: "gaf-3", titulo: "Gafas de Sol Urban Style #3", precio: 9500, categoria: "gafas", imagenes: ["images/gafas/gafas-3.jpg"], talles: ["Único"] },
  { id: "gaf-5", titulo: "Gafas de Sol Urban Style #5", precio: 9500, categoria: "gafas", imagenes: ["images/gafas/gafas-5.jpg"], talles: ["Único"] },

  // --- ACCESORIOS ---
  { id: "aur-2", titulo: "Auriculares Inalámbricos Pro", precio: 15000, categoria: "accesorios", imagenes: ["images/accesorios/auricular-2.jpg"], talles: ["Blanco", "Negro"] },
  { id: "aur-tws", titulo: "Auriculares TWS Sport", precio: 15000, categoria: "accesorios", imagenes: ["images/accesorios/auricular-tws.jpg"], talles: ["Verde", "Negro"] },
  { id: "bill-1", titulo: "Billetera Urbana Bakano #1", precio: 12000, categoria: "accesorios", imagenes: ["images/accesorios/billetera-1.jpg"], talles: ["Único"] },
  { id: "smartwatch", titulo: "Smartwatch Deportivo Bakano", precio: 20000, categoria: "accesorios", imagenes: ["images/accesorios/smartwatch.jpg"], talles: ["Negro", "Gris"] },

  // --- ZAPATILLAS Y MEDIAS ---
  { id: "med-1", titulo: "Pack Medias Antideslizantes #1", precio: 5000, categoria: "zapatillas-medias", imagenes: ["images/zapatillas y medias/medias-1.jpg"], talles: ["Único"] },
  { id: "zap-1", titulo: "Zapatillas Deportivas Bakano #1", precio: 38000, categoria: "zapatillas-medias", imagenes: ["images/zapatillas y medias/zapatillas-1.jpg"], talles: ["39", "40", "41", "42", "43"] },
  { id: "zap-2", titulo: "Zapatillas Deportivas Bakano #2", precio: 38000, categoria: "zapatillas-medias", imagenes: ["images/zapatillas y medias/zapatillas-2.jpg"], talles: ["39", "40", "41", "42", "43"] },
  { id: "zap-3", titulo: "Zapatillas Deportivas Bakano #3", precio: 38000, categoria: "zapatillas-medias", imagenes: ["images/zapatillas y medias/zapatillas-3.jpg"], talles: ["39", "40", "41", "42", "43"] },

  // --- PERFUMES ($25.000) ---
  { id: "perf-1", titulo: "Perfume Importado #1", precio: 25000, categoria: "perfumes", imagenes: ["images/perfumes/perfumes-1.jpg"], talles: ["100ml"] },
  { id: "perf-2", titulo: "Perfume Importado #2", precio: 25000, categoria: "perfumes", imagenes: ["images/perfumes/perfumes-2.jpg"], talles: ["100ml"] },
  { id: "perf-3", titulo: "Perfume Importado #3", precio: 25000, categoria: "perfumes", imagenes: ["images/perfumes/perfumes-3.jpg"], talles: ["100ml"] },
  { id: "perf-4", titulo: "Perfume Importado #4", precio: 25000, categoria: "perfumes", imagenes: ["images/perfumes/perfumes-4.jpg"], talles: ["100ml"] },

  // --- NIÑOS ($15.000) ---
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `nin-${i + 1}`,
    titulo: `Remera Niño Streetwear #${i + 1}`,
    precio: 15000,
    categoria: "ninos",
    imagenes: [`images/ninos/remeras-nino-${i + 1}.jpg`],
    talles: ["4", "6", "8", "10", "12", "14", "16"]
  }))
];

let carrito = [];
let productoSeleccionado = null;

// Manejo inteligente de errores de imagen
function manejarErrorImagen(imgElement) {
  const srcOriginal = imgElement.getAttribute("data-src-original") || imgElement.src;
  if (!imgElement.getAttribute("data-src-original")) {
    imgElement.setAttribute("data-src-original", srcOriginal);
  }

  const intentos = parseInt(imgElement.getAttribute("data-intento") || "0");

  if (intentos === 0) {
    imgElement.setAttribute("data-intento", "1");
    if (srcOriginal.includes(".jpg")) {
      imgElement.src = srcOriginal.replace(".jpg", ".jpeg");
    } else if (srcOriginal.includes(".jpeg")) {
      imgElement.src = srcOriginal.replace(".jpeg", ".png");
    } else {
      imgElement.src = srcOriginal.replace(".png", ".jpg");
    }
  } else if (intentos === 1) {
    imgElement.setAttribute("data-intento", "2");
    imgElement.src = srcOriginal.replace(/\.(jpg|jpeg|png)/i, ".JPG");
  } else {
    imgElement.onerror = null;
    imgElement.src = "images/estilobakano.jpg";
  }
}

// Inicialización de la tienda
document.addEventListener("DOMContentLoaded", () => {
  renderizarCatalogo(productos);
});

// Renderizar Productos en la Grilla
function renderizarCatalogo(listaProductos) {
  const contenedor = document.getElementById("catalogo");
  contenedor.innerHTML = "";

  if (listaProductos.length === 0) {
    contenedor.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color:#888;">No hay productos disponibles en esta categoría.</p>`;
    return;
  }

  listaProductos.forEach((prod) => {
    const card = document.createElement("div");
    card.classList.add("producto-card");
    card.onclick = () => abrirModal(prod.id);

    card.innerHTML = `
      <div class="img-container">
        <img src="${prod.imagenes[0]}" alt="${prod.titulo}" loading="lazy" onerror="manejarErrorImagen(this)">
      </div>
      <div class="prod-detalles">
        <h3>${prod.titulo}</h3>
        <p class="precio">$${prod.precio.toLocaleString("es-AR")}</p>
        <button class="btn-elegir">Ver Opciones 👁️</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

// Filtrar por Categorías
function filtrarCategoria(categoria, event) {
  document.querySelectorAll(".btn-cat").forEach((btn) => btn.classList.remove("active"));
  if (event) event.target.classList.add("active");

  if (categoria === "todos") {
    renderizarCatalogo(productos);
  } else if (categoria === "liquidacion") {
    const liquidacion = productos.filter((p) => p.esLiquidacion || p.categoria === "liquidacion");
    renderizarCatalogo(liquidacion);
  } else {
    const filtrados = productos.filter((p) => p.categoria === categoria);
    renderizarCatalogo(filtrados);
  }
}

// Modal de Detalle
function abrirModal(idProd) {
  productoSeleccionado = productos.find((p) => p.id === idProd);
  if (!productoSeleccionado) return;

  document.getElementById("modal-titulo").innerText = productoSeleccionado.titulo;
  document.getElementById("modal-precio").innerText = `$${productoSeleccionado.precio.toLocaleString("es-AR")}`;

  const feedImg = document.getElementById("modal-feed-imagenes");
  feedImg.innerHTML = `<img src="${productoSeleccionado.imagenes[0]}" alt="${productoSeleccionado.titulo}" onerror="manejarErrorImagen(this)">`;

  const selectTalle = document.getElementById("modal-talle");
  selectTalle.innerHTML = "";
  productoSeleccionado.talles.forEach((talle) => {
    selectTalle.innerHTML += `<option value="${talle}">${talle}</option>`;
  });

  document.getElementById("modal-cant").value = 1;
  document.getElementById("modal-producto").classList.add("active");
}

function cerrarModal() {
  document.getElementById("modal-producto").classList.remove("active");
  productoSeleccionado = null;
}

// Lógica del Carrito
function agregarAlCarritoDesdeModal() {
  if (!productoSeleccionado) return;

  const talle = document.getElementById("modal-talle").value;
  const cantidad = parseInt(document.getElementById("modal-cant").value) || 1;

  const itemExistente = carrito.find(
    (item) => item.id === productoSeleccionado.id && item.talle === talle
  );

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({
      id: productoSeleccionado.id,
      titulo: productoSeleccionado.titulo,
      precio: productoSeleccionado.precio,
      imagen: productoSeleccionado.imagenes[0],
      talle: talle,
      cantidad: cantidad
    });
  }

  actualizarCarritoUI();
  cerrarModal();
  toggleCart(true);
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const contenedorItems = document.getElementById("cart-items");
  const totalCount = document.getElementById("cart-count");
  const totalPrice = document.getElementById("cart-total-price");

  contenedorItems.innerHTML = "";

  if (carrito.length === 0) {
    contenedorItems.innerHTML = `<p class="cart-empty-text">El carrito está vacío</p>`;
    totalCount.innerText = "0";
    totalPrice.innerText = "$0";
    return;
  }

  let total = 0;
  let cantidadTotal = 0;

  carrito.forEach((item, index) => {
    total += item.precio * item.cantidad;
    cantidadTotal += item.cantidad;

    const itemElement = document.createElement("div");
    itemElement.classList.add("cart-item");
    itemElement.innerHTML = `
      <img src="${item.imagen}" alt="${item.titulo}" onerror="manejarErrorImagen(this)">
      <div class="cart-item-details">
        <h4>${item.titulo}</h4>
        <p>Talle: ${item.talle} | Cant: ${item.cantidad}</p>
        <p class="precio">$${(item.precio * item.cantidad).toLocaleString("es-AR")}</p>
      </div>
      <button class="cart-remove-btn" onclick="eliminarDelCarrito(${index})">🗑️</button>
    `;
    contenedorItems.appendChild(itemElement);
  });

  totalCount.innerText = cantidadTotal;
  totalPrice.innerText = `$${total.toLocaleString("es-AR")}`;
}

function toggleCart(forceOpen = false) {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");

  if (forceOpen) {
    drawer.classList.add("active");
    overlay.classList.add("active");
  } else {
    drawer.classList.toggle("active");
    overlay.classList.toggle("active");
  }
}

// Checkout directo por WhatsApp
function checkoutWhatsApp() {
  if (carrito.length === 0) {
    alert("Agregá productos al carrito antes de finalizar la compra.");
    return;
  }

  const numeroTelefono = "5493834287709";
  let mensaje = "¡Hola *Estilo Bakano*! 👋 Quería realizar el siguiente pedido:\n\n";

  let total = 0;
  carrito.forEach((item, index) => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    mensaje += `${index + 1}. *${item.titulo}*\n   • Talle: ${item.talle}\n   • Cantidad: ${item.cantidad}\n   • Precio: $${subtotal.toLocaleString("es-AR")}\n\n`;
  });

  mensaje += `💰 *TOTAL A PAGAR:* $${total.toLocaleString("es-AR")}\n\n`;
  mensaje += "Quedo a la espera para coordinar el pago y envío. ¡Muchas gracias!";

  const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}