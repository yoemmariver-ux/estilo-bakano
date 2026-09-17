// Array con tus productos de ejemplo
const productos = [
  { id: 1, nombre: "Campera Puffer Black", categoria: "Camperes", precio: 45000, img: "images/puffer.jpg" },
  { id: 2, nombre: "Jogger Urban Estilo", categoria: "Joggers", precio: 28000, img: "images/jogger.jpg" },
  { id: 3, nombre: "Lentes Sport Mode", categoria: "Accesorios", precio: 15000, img: "images/lentes.jpg" }
];

let carrito = [];
let productoSeleccionado = null;

document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
});

function renderProductos(lista) {
  const container = document.getElementById("catalogo");
  if (!container) return;
  container.innerHTML = "";

  lista.forEach(prod => {
    const card = document.createElement("div");
    card.className = "producto-card";
    card.onclick = () => abrirModal(prod);
    card.innerHTML = `
      <div class="img-container">
        <img src="${prod.img}" alt="${prod.nombre}" onerror="this.src='https://via.placeholder.com/200'">
      </div>
      <div class="prod-detalles">
        <h3>${prod.nombre}</h3>
        <p class="precio">$${prod.precio.toLocaleString()}</p>
        <button class="btn-elegir">Ver / Elegir</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function filtrarCategoria(cat) {
  const btns = document.querySelectorAll(".btn-cat");
  btns.forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");

  if (cat === "Todos") {
    renderProductos(productos);
  } else {
    const filtrados = productos.filter(p => p.categoria.toLowerCase() === cat.toLowerCase());
    renderProductos(filtrados);
  }
}

function abrirModal(prod) {
  productoSeleccionado = prod;
  document.getElementById("modal-img").src = prod.img;
  document.getElementById("modal-titulo").innerText = prod.nombre;
  document.getElementById("modal-precio").innerText = `$${prod.precio.toLocaleString()}`;
  document.getElementById("modal-cantidad").value = 1;
  document.getElementById("modal-producto").classList.add("active");
}

function cerrarModal() {
  document.getElementById("modal-producto").classList.remove("active");
}

function agregarAlCarritoDesdeModal() {
  if (!productoSeleccionado) return;
  
  const talle = document.getElementById("modal-talle").value;
  const cantidad = parseInt(document.getElementById("modal-cantidad").value);

  const itemExistente = carrito.find(i => i.id === productoSeleccionado.id && i.talle === talle);

  if (itemExistente) {
    itemExistente.cantidad += cantidad;
  } else {
    carrito.push({
      ...productoSeleccionado,
      talle: talle,
      cantidad: cantidad
    });
  }

  cerrarModal();
  actualizarCarrito();
  toggleCart();
}

function actualizarCarrito() {
  const body = document.getElementById("cart-body");
  const count = document.getElementById("cart-count");
  const total = document.getElementById("cart-total-price");

  body.innerHTML = "";
  let sumaTotal = 0;
  let totalItems = 0;

  carrito.forEach((item, index) => {
    sumaTotal += item.precio * item.cantidad;
    totalItems += item.cantidad;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.nombre}">
      <div class="cart-item-info">
        <h4>${item.nombre}</h4>
        <p>Talle: ${item.talle} | Cant: ${item.cantidad}</p>
        <p><strong>$${(item.precio * item.cantidad).toLocaleString()}</strong></p>
      </div>
      <button style="background:none; border:none; color:red; cursor:pointer;" onclick="eliminarDelCarrito(${index})">✕</button>
    `;
    body.appendChild(div);
  });

  count.innerText = totalItems;
  total.innerText = `$${sumaTotal.toLocaleString()}`;
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

function toggleCart() {
  document.getElementById("cart-drawer").classList.toggle("active");
  document.getElementById("cart-overlay").classList.toggle("active");
}

function enviarWhatsApp() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  const numero = "5493834000000"; // Cambiar por tu WhatsApp real
  let texto = "¡Hola Estilo Bakano! Quiero realizar el siguiente pedido:\n\n";

  let total = 0;
  carrito.forEach(i => {
    const sub = i.precio * i.cantidad;
    total += sub;
    texto += `- ${i.nombre} (Talle: ${i.talle}) x${i.cantidad}: $${sub.toLocaleString()}\n`;
  });

  texto += `\n*Total a pagar: $${total.toLocaleString()}*`;
  
  window.open(`https://wa.me/${numero}?text=${encodeURIComponent(texto)}`, '_blank');
}