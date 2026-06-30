/**
 * script.js - Check Service
 * Gestión Integral del Taller & Estándar VTS
 * Programación: RDS (Rivas Desarrollo de Software)
 */

/**
 * CONFIGURACIÓN DE GALERÍA (ARRAY DE OBJETOS)
 * Mantenido íntegramente con todas tus categorías y rutas.
 */
const fotosTrabajos = [
    { src: './assets/multimedia/git/2.webp', categoria: 'Software' },
    { src: './assets/multimedia/git/1.webp', categoria: 'Software' },
    { src: './assets/multimedia/git/3.webp', categoria: 'Software' },
    { src: './assets/multimedia/git/4.webp', categoria: 'Software' },
    { src: './assets/multimedia/git/5.webp', categoria: 'Software' },
    { src: './assets/multimedia/git/6.webp', categoria: 'Software' },

    { src: './assets/multimedia/alternadores/alt_1.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/8.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/10.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/11.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/12.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/13.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/18.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/19.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/20.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/21.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/22.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/23.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/24.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/25.webp', categoria: 'Alternadores' },
    { src: './assets/multimedia/alternadores/26.webp', categoria: 'Alternadores' },

    { src: './assets/multimedia/burro/1.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/2.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/3.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/4.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/5.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/6.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/7.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/9.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/14.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/15.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/16.webp', categoria: 'Motor de Arranque' },
    { src: './assets/multimedia/burro/17.webp', categoria: 'Motor de Arranque' },

    { src: './assets/multimedia/inyeccion/iny_1.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_2.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_3.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_4.webp', categoria: 'Inyeccion Electronica' },
    { src: './assets/multimedia/inyeccion/iny_5.webp', categoria: 'Inyeccion Electronica' },

    { src: './assets/multimedia/electricidad/elec_1.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_2.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_3.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_4.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_5.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_6.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_7.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_8.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_9.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_10.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_11.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_12.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_13.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_14.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_15.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_16.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_17.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_18.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_19.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_20.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_21.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_22.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_23.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_24.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_25.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_26.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_27.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_28.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_29.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_30.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_31.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_32.webp', categoria: 'Electricidad' },
    { src: './assets/multimedia/electricidad/elec_33.webp', categoria: 'Electricidad' },

    { src: './assets/multimedia/electronica/electronica_1.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_2.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_3.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_4.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_5.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_6.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_7.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_8.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_9.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_10.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_11.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_12.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_13.webp', categoria: 'Electronica' },
    { src: './assets/multimedia/electronica/electronica_14.webp', categoria: 'Electronica' },

    { src: './assets/multimedia/distribucion/dist_1.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_2.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_3.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_4.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_5.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_6.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_7.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_8.webp', categoria: 'Distribucion' },
    { src: './assets/multimedia/distribucion/dist_9.webp', categoria: 'Distribucion' },

    { src: './assets/multimedia/general/grl_1.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_2.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_3.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_4.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_5.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_6.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_7.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_8.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_9.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_10.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_11.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_12.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_13.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_14.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_15.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_16.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_17.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_18.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_19.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_20.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_21.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_22.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_23.webp', categoria: 'Mecanica General' },
    { src: './assets/multimedia/general/grl_24.webp', categoria: 'Mecanica General' },

    { src: './assets/multimedia/tapa/tapa_1.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_2.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_3.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_4.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_5.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_6.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_7.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_9.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_10.webp', categoria: 'Tapa de Cilindro' },
    { src: './assets/multimedia/tapa/tapa_11.webp', categoria: 'Tapa de Cilindro' },

    { src: './assets/multimedia/nosotros/nsts_1.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_2.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_3.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_4.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_5.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_6.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_7.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_8.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_9.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_10.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_11.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_12.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_13.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_14.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_15.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_16.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_17.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_18.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_19.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_20.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_21.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_22.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_23.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_24.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_25.webp', categoria: 'Nosotros' },
    { src: './assets/multimedia/nosotros/nsts_26.webp', categoria: 'Nosotros' },
];

// Variables globales para el visor (Lightbox)
let albumActual = [];
let indiceActual = 0;

/**
 * NAVEGACIÓN SPA ACTUALIZADA
 * Soporta las secciones, cierre automático de menú y telemetría de Google Analytics.
 */
function navigate(viewId) {
    // 1. Ocultar todos los contenedores de vista
    const views = document.querySelectorAll('.view-container');
    views.forEach(v => v.classList.remove('active'));

    // 2. Mostrar el contenedor seleccionado
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
    }

    // 3. REPORTE A GOOGLE ANALYTICS
    if (typeof gtag === 'function') {
        gtag('event', 'page_view', {
            page_title: viewId,
            page_path: '/' + viewId
        });
    }

// 4. Actualizar estados de los links en el menú (RECARGADO)
    const links = document.querySelectorAll('nav ul li a'); // Selector más específico
    
    links.forEach(l => {
        // Removemos la clase de TODOS sin importar nada
        l.classList.remove('active-link');
        
        // Verificamos si este es el link que tiene el atributo que buscamos
        // Usamos trim() para evitar errores por espacios invisibles en el HTML
        const targetAttr = l.getAttribute('data-target');
        if (targetAttr && targetAttr.trim() === viewId) {
            l.classList.add('active-link');
        }
    });

    // 5. Cerrar menú móvil al navegar
    const navLinks = document.getElementById('nav-links');
    if (navLinks) {
        navLinks.classList.remove('active'); // Cambié 'show' por 'active' si usas el estilo estándar de toggle
        // Si tu CSS usa otra clase para ocultar el menú, asegúrate que coincida aquí
    }

    // 6. Scroll al inicio suave
    window.scrollTo({top: 0, behavior: 'smooth'});

    // 7. Carga inicial de galería si entra a multimedia
    if (viewId === 'multimedia' && typeof renderGallery === 'function') {
        renderGallery('todos');
    }
}

/**
 * MENÚ MÓVIL (Toggle)
 */
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.toggle('show');
}

/**
 * LÓGICA DE GALERÍA (RENDERIZADO DINÁMICO)
 */
function renderGallery(filtro = 'todos') {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    grid.innerHTML = ''; 

    if (filtro === 'todos') {
        // Portadas por categoría única para vista general
        const categoriasUnicas = [...new Set(fotosTrabajos.map(f => f.categoria))];
        
        categoriasUnicas.forEach(cat => {
            const portada = fotosTrabajos.find(f => f.categoria === cat);
            crearCard(portada, grid, true);
        });
    } else {
        // Todas las fotos de una categoría específica
        const filtradas = fotosTrabajos.filter(f => f.categoria === filtro);
        if (filtradas.length === 0) {
            grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 20px;">Próximamente fotos de esta categoría.</p>';
        } else {
            filtradas.forEach(foto => crearCard(foto, grid, false));
        }
    }
}

function crearCard(foto, contenedor, esPortada) {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    
    const label = esPortada ? `<div class="category-badge">${foto.categoria.toUpperCase()}</div>` : '';
    
    div.innerHTML = `
        ${label}
        <img src="${foto.src}" alt="Trabajo Check Service" onclick="abrirLightbox('${foto.categoria}', '${foto.src}')" loading="lazy">
    `;
    contenedor.appendChild(div);
}

/**
 * LÓGICA DEL VISOR (LIGHTBOX)
 */
function abrirLightbox(categoria, fotoInicial) {
    albumActual = fotosTrabajos.filter(f => f.categoria === categoria);
    indiceActual = albumActual.findIndex(f => f.src === fotoInicial);
    
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Bloquear scroll
        actualizarLightbox();
    }
}

function actualizarLightbox() {
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');
    
    if (img && albumActual[indiceActual]) {
        img.src = albumActual[indiceActual].src;
        caption.innerText = `${albumActual[indiceActual].categoria.toUpperCase()} (${indiceActual + 1} / ${albumActual.length})`;
    }
}

function cambiarFoto(dir) {
    indiceActual += dir;
    if (indiceActual < 0) indiceActual = albumActual.length - 1;
    if (indiceActual >= albumActual.length) indiceActual = 0;
    actualizarLightbox();
}

function cerrarLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Habilitar scroll
    }
}

/**
 * FILTROS DE BOTONES EN MULTIMEDIA
 */
function filterGallery(categoria, btn) {
    const btns = document.querySelectorAll('.filter-btn');
    btns.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    renderGallery(categoria);
}

/**
 * ENVÍO DE TURNOS A WHATSAPP
 */
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('b-name').value;
        const tel = document.getElementById('b-tel').value;
        const auto = document.getElementById('b-car').value;
        const servicio = document.getElementById('b-service').value;

        const nroCheckService = "5491151507872"; 

        const msjHeader = `*SOLICITUD DE TURNO - CHECK SERVICE*%0A`;
        const msjBody = `----------------------------------%0A` +
                        `*Cliente:* ${nombre}%0A` +
                        `*Vehículo:* ${auto}%0A` +
                        `*Servicio:* ${servicio}%0A` +
                        `*Contacto:* ${tel}%0A` +
                        `----------------------------------%0A` +
                        `Hola, solicito coordinar un turno para este servicio.`;

        const urlFinal = `https://api.whatsapp.com/send?phone=${nroCheckService}&text=${msjHeader}${msjBody}`;
        window.open(urlFinal, '_blank');
        
        this.reset();
    });
}

/**
 * EVENTOS TECLADO Y CARGA INICIAL
 */
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") cerrarLightbox();
    if (document.getElementById('lightbox-modal').style.display === 'flex') {
        if (e.key === "ArrowRight") cambiarFoto(1);
        if (e.key === "ArrowLeft") cambiarFoto(-1);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar en Home
    navigate('home');
});






/**
 * NAVEGACIÓN SPA REFORZADA
 */
function navigate(viewId) {
    const views = document.querySelectorAll('.view-container');
    views.forEach(v => v.classList.remove('active'));

    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
        console.log("Cambiando a vista:", viewId); 
    }

    // LÓGICA ESPECÍFICA PARA NOVEDADES (ID 'news')
    if (viewId === 'news') {
        cargarNovedades();
    }

    // LÓGICA PARA MULTIMEDIA
    if (viewId === 'multimedia') {
        if (typeof renderGallery === 'function') {
            renderGallery('todos');
        }
    }

    // Cerrar menú y scroll
    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.remove('show');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

/**
 * CARGA DINÁMICA DE NOVEDADES
 */
function cargarNovedades() {
    const container = document.getElementById('news-container');
    
    if (!container) return;

    // Verificamos que los datos existan
    if (typeof novedadesData === 'undefined' || novedadesData.length === 0) {
        container.innerHTML = "<p style='text-align:center;'>Esperando datos del Logbook...</p>";
        return;
    }

    // LIMPIAMOS EL CONTENEDOR ANTES DE EMPEZAR
    container.innerHTML = ''; 

    /**
     * LÓGICA DE ORDENAMIENTO (STACK)
     * Creamos una copia y la invertimos para que el último ID (más reciente) 
     * sea el primer elemento del array al mapear.
     */
    const historialCronologico = [...novedadesData].reverse();

    historialCronologico.forEach(noticia => {
        const card = document.createElement('div');
        card.className = 'category-block';
        card.style.cssText = "background: #fff; border: 1px solid #eee; border-radius: 12px; overflow: hidden; margin-bottom: 25px; display: flex; flex-direction: column; box-shadow: 0 4px 12px rgba(0,0,0,0.08);";

        card.innerHTML = `
            <div class="category-header" style="background: var(--primary); color: white; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-weight: bold; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 1px; color: #ffffff;">${noticia.categoria} | ${noticia.vts}</span>
                <span style="font-size: 0.8rem; opacity: 0.9; color: #ffffff;">${noticia.fecha}</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; align-items: stretch;">
                <div style="flex: 1; min-width: 300px; padding: 25px;">
                    <h3 style="margin-top: 0; color: var(--primary); font-family: 'Montserrat'; font-weight: 700; font-size: 1.3rem; margin-bottom: 15px;">${noticia.titulo}</h3>
                    <p style="color: #444; line-height: 1.7; font-size: 1rem; margin: 0;">${noticia.descripcion}</p>
                </div>
                <div style="width: 300px; min-height: 200px; background: url('${noticia.imagen}') center/cover no-repeat; border-left: 1px solid #f0f0f0;">
                </div>
            </div>
        `;
        container.appendChild(card);
    });

    console.log("Logbook ordenado: Mostrando primero el ID", historialCronologico[0].id);
}

// 1. Configuración de tu Firebase (Pegá tu URL aquí)
const firebaseConfig = {
    databaseURL: "https://checkservicecounter-default-rtdb.firebaseio.com/" 
};

// 2. Inicializar Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// 3. Función para contar y mostrar visitas
function gestionarVisitas() {
    const visitasRef = database.ref('contador_visitas');

    // Usamos una transacción para que si dos personas entran a la vez, el conteo no falle
    visitasRef.transaction((currentValue) => {
        return (currentValue || 0) + 1;
    }, (error, committed, snapshot) => {
        if (committed) {
            // El número que viene de la base de datos
            const totalVisitas = snapshot.val();
            
            // Lo formateamos a 6 dígitos (ej: 000125) para que mantenga el estilo de tablero
            const numeroFormateado = totalVisitas.toString().padStart(6, '0');
            
            // Lo inyectamos en el HTML
            const el = document.getElementById('contador-interno');
            if (el) {
                el.innerText = numeroFormateado;
            }
        }
    });
}

// 4. Ejecutar cuando la página termine de cargar
window.addEventListener('load', gestionarVisitas);