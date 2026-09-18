// Base de datos de productos
const productos = [
  // --- REMERAS (1 a 37) ---
  ...Array.from({ length: 36 }, (_, i) => ({
    id: `rem-${i + 1}`,
    titulo: `Remera Streetwear #${i + 1}`,
    precio: 15000,
    categoria: "remeras",
    imagenes: [`images/remeras/remeras-${i + 1}.jpg`],
    talles: ["S", "M", "L", "XL", "XXL"]
  })),
  {
    id: "rem-37",
    titulo: "Remera Streetwear #37 (Oferta)",
    precio: 10000,
    categoria: "remeras",
    imagenes: ["images/remeras/remeras-37.jpg"],
    talles: ["S", "M", "L", "XL"]
  },

  // --- GORRAS (1 a 27) ---
  ...Array.from({ length: 27 }, (_, i) => ({
    id: `gor-${i + 1}`,
    titulo: `Gorra Urbana #${i + 1}`,
    precio: 12000,
    categoria: "gorras",
    imagenes: [`images/gorras/gorras-${i + 1}.jpg`],
    talles: ["Único (Ajustable)"]
  })),

  // --- BUZOS (Nuevos a $15.000 en Liquidación / Conjuntos) ---
  {
    id: "buzo-1",
    titulo: "Buzo Oversize Urbano #1",
    precio: 15000,
    categoria: "conjuntos-deportivos",
    esLiquidacion: true,
    imagenes: ["images/buzos/buzo-1.jpg"],
    talles: ["M", "L", "XL"]
  },
  {
    id: "buzo-2",
    titulo: "Buzo Oversize Urbano #2",
    precio: 15000,
    categoria: "conjuntos-deportivos",
    esLiquidacion: true,
    imagenes: ["images/buzos/buzo-2.jpg"],
    talles: ["M", "L", "XL"]
  },
  {
    id: "buzo-3",
    titulo: "Buzo Oversize Urbano #3",
    precio: 15000,
    categoria: "conjuntos-deportivos",
    esLiquidacion: true,
    imagenes: ["images/buzos/buzo-3.jpg"],
    talles: ["M", "L", "XL"]
  },
  {
    id: "buzo-4",
    titulo: "Buzo Oversize Urbano #4",
    precio: 15000,
    categoria: "conjuntos-deportivos",
    esLiquidacion: true,
    imagenes: ["images/buzos/buzo-4.jpg"],
    talles: ["M", "L", "XL"]
  },

  // --- CONJUNTOS Y CAMPERAS (Liquidación) ---
  {
    id: "conj-1",
    titulo: "Conjunto Deportivo Urbano",
    precio: 20000,
    categoria: "conjuntos-deportivos",
    esLiquidacion: true,
    imagenes: ["images/conjuntos/conjunto-1.jpg"],
    talles: ["S", "M", "L", "XL"]
  },
  {
    id: "camp-1",
    titulo: "Campera Streetwear Impermeable",
    precio: 22000,
    categoria: "conjuntos-deportivos",
    esLiquidacion: true,
    imagenes: ["images/camperas/campera-1.jpg"],
    talles: ["M", "L", "XL"]
  },

  // --- OTROS PRODUCTOS ---
  {
    id: "box-1",
    titulo: "Pack Boxers Estilo Bakano",
    precio: 8000,
    categoria: "boxers",
    imagenes: ["images/boxers/boxer-1.jpg"],
    talles: ["M", "L", "XL"]
  },
  {
    id: "gaf-1",
    titulo: "Gafas de Sol Urban Style",
    precio: 9500,
    categoria: "gafas",
    imagenes: ["images/gafas/gafas-1.jpg"],
    talles: ["Único"]
  },
  {
    id: "tech-1",
    titulo: "Smartwatch Deportivo Bakano",
    precio: 25000,
    categoria: "auriculares-smartwatch",
    imagenes: ["images/tech/smartwatch-1.jpg"],
    talles: ["Negro", "Gris"]
  }
];

let carrito = [];
let productoSeleccionado = null;

// Manejo inteligente de errores de imagen para probar distintas rutas y extensiones
function manejarErrorImagen(imgElement) {
  const srcOriginal = imgElement.getAttribute("data-src-original") || imgElement.src;
  if (!imgElement.getAttribute("data-src-original")) {
    imgElement.setAttribute("data-src-original", srcOriginal);
  }

  const intentos = parseInt(imgElement.getAttribute("data-intento") || "0");

  if (intentos === 0) {
    // Intento 1: Probar en singular si la ruta tenía plural (ej: remeras-1.jpg -> remera-1.jpg)
    imgElement.setAttribute("data-intento", "1");
    if (srcOriginal.includes("remeras/remeras-")) {
      imgElement.src = srcOriginal.replace("remeras/remeras-", "remeras/remera-");
    } else if (srcOriginal.includes("gorras/gorras-")) {
      imgElement.src = srcOriginal.replace("gorras/gorras-", "gorras/gorra-");
    } else {
      imgElement.src = srcOriginal.replace(".jpg", ".png");
    }
  } else if (intentos === 1) {
    // Intento 2: Probar con extensión .png
    imgElement.setAttribute("data-intento", "2");
    imgElement.src = imgElement.src.replace(/\.(jpg|jpeg|JPG|JPEG)/, ".png");
  } else if (intentos === 2) {
    // Intento 3: Probar con extensión .JPG en mayúsculas
    imgElement.setAttribute("data-intento", "3");
    imgElement.src = imgElement.src.replace(/\.(png|jpg|jpeg)/, ".JPG");
  } else if (intentos === 3) {
    // Intento 4: Probar con extensión .JPEG
    imgElement.setAttribute("data-intento", "4");
    imgElement.src = imgElement.src.replace(/\.(JPG|png|jpg)/, ".jpeg");
  } else {
    // Fallback final al logo por defecto si la foto realmente no existe
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
    // Muestra productos marcados en liquidación u ofertas <= $10.000
    const liquidacion = productos.filter((p) => p.esLiquidacion || p.precio <= 10000);
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