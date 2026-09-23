// Base de datos de productos
const productos = [
  // --- REMERAS (1 a 36 - $20.000) ---
  ...Array.from({ length: 36 }, (_, i) => ({
    id: `rem-${i + 1}`,
    titulo: `Remera Streetwear #${i + 1}`,
    precio: 20000,
    categoria: "remeras",
    imagenes: [`remeras/remeras-${i + 1}.jpg`],
    talles: ["S", "M", "L", "XL", "XXL"]
  })),
  {
    id: "rem-37",
    titulo: "Remera Streetwear #37 (Oferta)",
    precio: 15000,
    categoria: "remeras",
    imagenes: ["remeras/remeras-37.jpg"],
    talles: ["S", "M", "L", "XL"]
  },

  // --- GORRAS (1 a 27 - $15.000) ---
  ...Array.from({ length: 27 }, (_, i) => ({
    id: `gor-${i + 1}`,
    titulo: `Gorra Urbana #${i + 1}`,
    precio: 15000,
    categoria: "gorras",
    imagenes: [`gorras/gorras-${i + 1}.jpg`],
    talles: ["Único (Ajustable)"]
  })),

  // --- CONJUNTOS DEPORTIVOS DE EQUIPOS ($45.000) ---
  { id: "conj-arsenal", titulo: "Conjunto Deportivo Arsenal", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-arsenal.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-barsa", titulo: "Conjunto Deportivo Barcelona", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-barsa.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-flamengo", titulo: "Conjunto Deportivo Flamengo", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-flamengo.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-francia", titulo: "Conjunto Deportivo Selección Francia", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-francia.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-italia", titulo: "Conjunto Deportivo Selección Italia", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-italia.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-mancity", titulo: "Conjunto Deportivo Manchester City", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-mancity.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-manutd", titulo: "Conjunto Deportivo Manchester United", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-manutd.jpg"], talles: ["S", "M", "L", "XL"] },
  { id: "conj-realmadrid", titulo: "Conjunto Deportivo Real Madrid", precio: 45000, categoria: "conjuntos-deportivos", imagenes: ["conjuntos deportivos/conjunto-realmadrid.jpg"], talles: ["S", "M", "L", "XL"] },

  // --- LIQUIDACIÓN (Buzos, Camperas y Chalecos) ---
  { id: "buzo-1", titulo: "Buzo Oversize Urbano #1", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-1.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-2", titulo: "Buzo Oversize Urbano #2", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-2.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-3", titulo: "Buzo Oversize Urbano #3", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-3.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-4", titulo: "Buzo Oversize Urbano #4", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-4.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-5", titulo: "Buzo Oversize Urbano #5", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-5.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-6", titulo: "Buzo Oversize Urbano #6", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-6.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-7", titulo: "Buzo Oversize Urbano #7", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-7.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-8", titulo: "Buzo Oversize Urbano #8", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-8.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-9", titulo: "Buzo Oversize Urbano #9", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-9.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-10", titulo: "Buzo Oversize Urbano #10", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-10.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-11", titulo: "Buzo Oversize Urbano #11", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-11.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-12", titulo: "Buzo Oversize Urbano #12", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-12.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-13", titulo: "Buzo Oversize Urbano #13", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-13.jpg"], talles: ["M", "L", "XL"] },
  { id: "buzo-14", titulo: "Buzo Oversize Urbano #14", precio: 15000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/buzo-14.jpg"], talles: ["M", "L", "XL"] },
  
  // Camperas ($40.000)
  { id: "camp-1", titulo: "Campera Streetwear #1", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-1.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-2", titulo: "Campera Puffer Beige #2", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-2.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-3", titulo: "Campera Puffer Blanca #3", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-3.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-4", titulo: "Campera Puffer Cream #4", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-4.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-5", titulo: "Campera Cortaviento #5", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-5.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-6", titulo: "Campera Urbana Azul #6", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-6.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-7", titulo: "Campera Bicolor Verde/Negro #7", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-7.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-8", titulo: "Campera Negra Basica #8", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-8.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-9", titulo: "Campera Puffer Negra #9", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-9.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-10", titulo: "Campera Tricolor #10", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-10.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-11", titulo: "Campera Deportiva Roja #11", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-11.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-12", titulo: "Campera Bordo/Negro #12", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-12.jpg"], talles: ["M", "L", "XL"] },
  { id: "camp-13", titulo: "Campera Sport Negra #13", precio: 40000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/campera-13.jpg"], talles: ["M", "L", "XL"] },

  // Chalecos ($22.000)
  { id: "chal-1", titulo: "Chaleco Inflable Verde #1", precio: 22000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/chaleco-1.jpg"], talles: ["M", "L", "XL"] },
  { id: "chal-2", titulo: "Chaleco Inflable Neón #2", precio: 22000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/chaleco-2.jpg"], talles: ["M", "L", "XL"] },
  { id: "chal-3", titulo: "Chaleco Inflable Naranja/Negro #3", precio: 22000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/chaleco-3.jpg"], talles: ["M", "L", "XL"] },
  { id: "chal-4", titulo: "Chaleco Inflable Rojo/Negro #4", precio: 22000, categoria: "liquidacion", esLiquidacion: true, imagenes: ["liquidacion/chaleco-4.jpg"], talles: ["M", "L", "XL"] },

  // --- BOXERS ($12.000) ---
  { id: "box-1", titulo: "Pack Boxers Estilo Bakano #1", precio: 12000, categoria: "boxers", imagenes: ["boxers/boxers-1.jpg"], talles: ["M", "L", "XL"] },
  { id: "box-2", titulo: "Pack Boxers Estilo Bakano #2", precio: 12000, categoria: "boxers", imagenes: ["boxers/boxers-2.jpg"], talles: ["M", "L", "XL"] },
  { id: "box-3", titulo: "Pack Boxers Estilo Bakano #3", precio: 12000, categoria: "boxers", imagenes: ["boxers/boxers-3.jpg"], talles: ["M", "L", "XL"] },
  { id: "box-4", titulo: "Pack Boxers Estilo Bakano #4", precio: 12000, categoria: "boxers", imagenes: ["boxers/boxers-4.jpg"], talles: ["M", "L", "XL"] },
  { id: "box-5", titulo: "Pack Boxers Estilo Bakano #5", precio: 12000, categoria: "boxers", imagenes: ["boxers/boxers-5.jpg"], talles: ["M", "L", "XL"] },

  // --- GAFAS ($9.500) ---
  { id: "gaf-1", titulo: "Gafas de Sol Urban Style #1", precio: 9500, categoria: "gafas", imagenes: ["gafas/gafas-1.jpg"], talles: ["Único"] },
  { id: "gaf-2", titulo: "Gafas de Sol Urban Style #2", precio: 9500, categoria: "gafas", imagenes: ["gafas/gafas-2.jpg"], talles: ["Único"] },
  { id: "gaf-3", titulo: "Gafas de Sol Urban Style #3", precio: 9500, categoria: "gafas", imagenes: ["gafas/gafas-3.jpg"], talles: ["Único"] },
  { id: "gaf-5", titulo: "Gafas de Sol Urban Style #5", precio: 9500, categoria: "gafas", imagenes: ["gafas/gafas-5.jpg"], talles: ["Único"] },

  // --- ACCESORIOS TECH ---
  { id: "aur-2", titulo: "Auriculares Inalámbricos Pro", precio: 15000, categoria: "auriculares-smartwatch", imagenes: ["images/auriculares y smartwatch/auricular-2.jpg"], talles: ["Blanco", "Negro"] },
  { id: "aur-tws", titulo: "Auriculares TWS Sport", precio: 15000, categoria: "auriculares-smartwatch", imagenes: ["images/auriculares y smartwatch/auricular-tws.jpg"], talles: ["Verde", "Negro"] },
  { id: "smartwatch", titulo: "Smartwatch Deportivo Bakano", precio: 20000, categoria: "auriculares-smartwatch", imagenes: ["images/auriculares y smartwatch/smartwatch.jpg"], talles: ["Negro", "Gris"] }
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
    if (srcOriginal.includes("remeras/remeras-")) {
      imgElement.src = srcOriginal.replace("remeras/remeras-", "remeras/remera-");
    } else if (srcOriginal.includes("gorras/gorras-")) {
      imgElement.src = srcOriginal.replace("gorras/gorras-", "gorras/gorra-");
    } else if (srcOriginal.includes("auriculares%20y%20reloj%20inteligente/")) {
      imgElement.src = srcOriginal.replace("auriculares%20y%20reloj%20inteligente/", "images/auriculares y smartwatch/");
    } else {
      imgElement.src = srcOriginal.replace(".jpg", ".png");
    }
  } else if (intentos === 1) {
    imgElement.setAttribute("data-intento", "2");
    imgElement.src = imgElement.src.replace(/\.(jpg|jpeg|JPG|JPEG)/, ".png");
  } else if (intentos === 2) {
    imgElement.setAttribute("data-intento", "3");
    imgElement.src = imgElement.src.replace(/\.(png|jpg|jpeg)/, ".JPG");
  } else if (intentos === 3) {
    imgElement.setAttribute("data-intento", "4");
    imgElement.src = imgElement.src.replace(/\.(JPG|png|jpg)/, ".jpeg");
  } else {
    imgElement.onerror = null;
    imgElement.src = "estilobakano.jpg";
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