window.addEventListener("load", function () {

let contador = 0;
let total = 0;
let abierto = false;

// =======================
// CREAR CARRITO PREMIUM
// =======================
const carrito = document.createElement("div");

carrito.innerHTML = `
<div id="icono-carrito">🛒 <span id="cantidad">0</span></div>

<div id="panel-carrito">
    <h2>WIN Store</h2>
    <ul id="lista"></ul>
    <p>Total: S/ <span id="total">0</span></p>

    <div id="botones-carrito">
        <button id="vaciar">Vaciar</button>
        <button id="comprar">Contratar</button>
    </div>
</div>
`;

document.body.appendChild(carrito);

// =======================
// CONTENEDOR GENERAL
// =======================
carrito.style.position = "fixed";
carrito.style.top = "90px";
carrito.style.right = "20px";
carrito.style.zIndex = "99999";
carrito.style.fontFamily = "Arial";

// =======================
// ICONO FLOTANTE
// =======================
const icono = document.getElementById("icono-carrito");

icono.style.background = "linear-gradient(45deg,#ff5a00,#ff8800)";
icono.style.color = "white";
icono.style.padding = "15px 18px";
icono.style.borderRadius = "15px";
icono.style.cursor = "pointer";
icono.style.fontWeight = "bold";
icono.style.fontSize = "20px";
icono.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
icono.style.transition = "0.3s";

// =======================
// PANEL PREMIUM
// =======================
const panel = document.getElementById("panel-carrito");

panel.style.display = "none";
panel.style.background = "#111";
panel.style.color = "white";
panel.style.width = "300px";
panel.style.padding = "22px";
panel.style.borderRadius = "20px";
panel.style.marginTop = "12px";
panel.style.boxShadow = "0 15px 30px rgba(0,0,0,0.4)";
panel.style.border = "2px solid #ff5a00";
panel.style.animation = "fadeIn 0.4s";

// titulo
panel.querySelector("h2").style.color = "#ff5a00";
panel.querySelector("h2").style.marginBottom = "15px";

// lista
const lista = document.getElementById("lista");
lista.style.paddingLeft = "20px";
lista.style.marginBottom = "15px";

// total
panel.querySelector("p").style.fontSize = "18px";
panel.querySelector("p").style.marginBottom = "15px";

// botones
const vaciar = document.getElementById("vaciar");
const comprar = document.getElementById("comprar");

vaciar.style.background = "#333";
vaciar.style.color = "white";
vaciar.style.border = "none";
vaciar.style.padding = "10px 15px";
vaciar.style.borderRadius = "10px";
vaciar.style.cursor = "pointer";
vaciar.style.marginRight = "10px";

comprar.style.background = "#ff5a00";
comprar.style.color = "white";
comprar.style.border = "none";
comprar.style.padding = "10px 15px";
comprar.style.borderRadius = "10px";
comprar.style.cursor = "pointer";

// =======================
// ABRIR / CERRAR
// =======================
icono.addEventListener("click", () => {
    abierto = !abierto;
    panel.style.display = abierto ? "block" : "none";
});

// =======================
// BOTONES PLANES
// =======================
const botones = document.querySelectorAll(".planes button");

botones.forEach((boton) => {

    boton.addEventListener("click", () => {

        const card = boton.parentElement;

        const plan = card.querySelector("h3").textContent;
        const precioTexto = card.querySelector(".precio").textContent;
        const precio = parseInt(precioTexto.replace(/\D/g, ""));

        contador++;
        total += precio;

        document.getElementById("cantidad").textContent = contador;
        document.getElementById("total").textContent = total;

        const item = document.createElement("li");
        item.textContent = `${plan} - S/${precio}`;
        item.style.marginBottom = "8px";

        lista.appendChild(item);

        boton.textContent = "✓ Agregado";
        boton.style.background = "green";

        setTimeout(() => {
            boton.textContent = "Lo quiero";
            boton.style.background = "";
        }, 1200);

    });

});

// =======================
// VACIAR
// =======================
vaciar.addEventListener("click", () => {
    contador = 0;
    total = 0;

    document.getElementById("cantidad").textContent = "0";
    document.getElementById("total").textContent = "0";
    lista.innerHTML = "";
});

// =======================
// COMPRAR
// =======================
comprar.addEventListener("click", () => {
    alert("🎉 Gracias por elegir WIN. Un asesor te llamará pronto.");
});

});


// Gian Carlos

// ===============================
// 1. SCROLL SUAVE
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================
// 2. NAVBAR DINÁMICO
// ===============================
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        nav.style.padding = "10px 30px";
        nav.style.background = "#111";
    } else {
        nav.style.padding = "20px 30px";
        nav.style.background = "transparent";
    }
});


// ===============================
// 3. EFECTO EN REGIONES
// ===============================
const regiones = document.querySelectorAll(".region");

regiones.forEach(region => {
    region.addEventListener("mouseover", () => {
        region.style.transform = "scale(1.1)";
        region.style.background = "#ff5000";
        region.style.color = "white";
    });

    region.addEventListener("mouseout", () => {
        region.style.transform = "scale(1)";
        region.style.background = "";
        region.style.color = "";
    });
});


// ===============================
// 4. BOTÓN VOLVER ARRIBA
// ===============================
const btnTop = document.createElement("button");
btnTop.textContent = "⬆";
btnTop.style.position = "fixed";
btnTop.style.bottom = "20px";
btnTop.style.right = "20px";
btnTop.style.padding = "10px 15px";
btnTop.style.borderRadius = "50%";
btnTop.style.border = "none";
btnTop.style.background = "#ff5000";
btnTop.style.color = "white";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.zIndex = "999";

document.body.appendChild(btnTop);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});

btnTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ===============================
// 5. RESEÑAS (MEJORADO + LOCALSTORAGE)
// ===============================
const form = document.getElementById('form-resena');
const lista = document.getElementById('lista-resenas');

// Cargar reseñas guardadas
window.addEventListener("load", () => {
    const guardadas = JSON.parse(localStorage.getItem("resenas")) || [];
    guardadas.forEach(r => crearResena(r.nombre, r.texto, r.estrellas));
});

// Crear reseña visual
function crearResena(nombre, texto, estrellas) {
    const nuevaResena = document.createElement('div');
    nuevaResena.classList.add('card');

    nuevaResena.innerHTML = `
        <h3>${nombre}</h3>
        <p style="color:#ff5000;font-size:20px;">${'★'.repeat(estrellas)}</p>
        <p style="color:#ccc;">"${texto}"</p>
    `;

    lista.prepend(nuevaResena);
}

// Evento submit
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre-resena').value;
    const texto = document.getElementById('texto-resena').value;
    const estrellas = document.querySelector('input[name="rating"]:checked')?.value;

    if (!estrellas) {
        alert("Marca las estrellas ⭐");
        return;
    }

    crearResena(nombre, texto, estrellas);

    // Guardar en localStorage
    const guardadas = JSON.parse(localStorage.getItem("resenas")) || [];
    guardadas.push({ nombre, texto, estrellas });
    localStorage.setItem("resenas", JSON.stringify(guardadas));

    form.reset();
});


// ===============================
// 6. CONTADOR DE RESEÑAS
// ===============================
const contador = document.createElement("p");
contador.style.textAlign = "center";
contador.style.marginTop = "10px";
document.querySelector(".resenas-form").appendChild(contador);

function actualizarContador() {
    const total = document.querySelectorAll("#lista-resenas .card").length;
    contador.textContent = `Total de reseñas: ${total}`;
}

// Actualizar cada vez que cambia
const observer = new MutationObserver(actualizarContador);
observer.observe(lista, { childList: true });

actualizarContador();