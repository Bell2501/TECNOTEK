<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Contacta a TECNOTEK para cotizar alarmas, cámaras, computadoras, impresoras y otros productos de tecnología." />
  <title>Contacto | TECNOTEK</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="topbar">
    <div class="container">
      <span><strong>TECNOTEK</strong> · Seguridad inteligente para tu negocio y hogar</span>
      <span>WhatsApp: +52 55 1234 5678</span>
    </div>
  </div>

  <header class="header">
    <div class="container">
      <a href="index.html" class="brand" aria-label="TECNOTEK inicio">
        <span class="brand-mark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3L4.5 6.5v5.7c0 4.7 3.1 7.9 7.5 9.8 4.4-1.9 7.5-5.1 7.5-9.8V6.5L12 3Z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </span>
        <span class="brand-text">TECNO<strong>TEK</strong></span>
      </a>

      <nav class="nav" aria-label="Menú principal">
        <a href="index.html">Inicio</a>
        <a href="productos.html">Productos</a>
        <a href="nosotros.html">Nosotros</a>
        <a href="contacto.html">Contacto</a>
      </nav>

      <div class="nav-actions">
        <button class="icon-btn" type="button" aria-label="Buscar">⌕</button>
        <a class="btn btn-primary" href="contacto.html">Cotizar ahora</a>
        <button class="burger" type="button" aria-label="Abrir menú" aria-expanded="false">☰</button>
      </div>
    </div>
  </header>

  <section class="page-banner">
    <div class="container">
      <div>
        <div class="crumbs"><span>Inicio</span> <span>›</span> <span>Contacto</span></div>
        <h1>Contáctanos</h1>
        <p>Estamos listos para ayudarte a escoger la mejor solución para tu espacio y proyecto.</p>
      </div>
      <a class="btn btn-primary" href="https://wa.me/5215512345678" target="_blank" rel="noreferrer">Chatear por WhatsApp</a>
    </div>
  </section>

  <main class="contact-page">
    <div class="container contact-grid">
      <aside class="info-panel">
        <h3>Información</h3>
        <div class="contact-list">
          <div class="contact-item">
            <div class="contact-icon">☎</div>
            <div>
              <strong>Teléfono</strong>
              <span>+52 55 1234 5678</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">✉</div>
            <div>
              <strong>Correo</strong>
              <span>ventas@tecnotek.com</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">⌂</div>
            <div>
              <strong>Dirección</strong>
              <span>Av. Tecnológica 240, CDMX, México</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">⏰</div>
            <div>
              <strong>Horario</strong>
              <span>Lun a Sab · 9:00 a 18:00 hrs</span>
            </div>
          </div>
        </div>

        <div class="map-box" aria-label="Mapa de ubicación">
          <svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa de ejemplo">
            <rect width="500" height="220" fill="#EEF4FF"/>
            <path d="M0 160 L130 120 L220 150 L320 90 L500 120 L500 220 L0 220 Z" fill="#DDE9F8"/>
            <path d="M100 0 L120 50 L160 75 L120 120 L90 70 Z" fill="#CEE4FF"/>
            <path d="M300 20 L360 35 L420 15 L470 70 L430 120 L350 110 Z" fill="#D6E5FF"/>
            <path d="M170 80 L210 90 L230 145 L180 175 L145 120 Z" fill="#C8D9F8"/>
            <circle cx="260" cy="102" r="14" fill="#2563EB" opacity="0.9"/>
            <path d="M260 90 L260 114 M248 102 L272 102" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
      </aside>

      <section class="form-panel">
        <h3>Envíanos tu consulta</h3>
        <form id="contactForm" class="contact-form">
          <div class="double">
            <label class="field">
              <span>Nombre</span>
              <input id="name" type="text" placeholder="Tu nombre" required />
            </label>
            <label class="field">
              <span>Correo</span>
              <input type="email" placeholder="tu@correo.com" required />
            </label>
          </div>

          <div class="double">
            <label class="field">
              <span>Teléfono</span>
              <input type="tel" placeholder="(55) 1234 5678" />
            </label>
            <label class="field">
              <span>Interés</span>
              <select id="interest">
                <option value="Alarmas">Alarmas</option>
                <option value="Cámaras de seguridad">Cámaras de seguridad</option>
                <option value="Cercas eléctricas">Cercas eléctricas</option>
                <option value="Computadoras">Computadoras</option>
                <option value="Impresoras">Impresoras</option>
                <option value="Consumibles">Consumibles</option>
                <option value="Otro">Otro</option>
              </select>
            </label>
          </div>

          <label class="field">
            <span>Mensaje</span>
            <textarea class="textarea" placeholder="Cuéntanos qué necesitas..."></textarea>
          </label>

          <button class="btn btn-primary" type="submit">Enviar consulta</button>
          <p id="formStatus" class="muted" style="margin:0; min-height:20px; font-size:.8rem;"></p>
        </form>
      </section>
    </div>
  </main>

  <footer class="footer">
    <div class="container">
      <a href="index.html" class="brand" aria-label="TECNOTEK inicio">
        <span class="brand-mark" style="width:42px;height:42px;border-radius:12px;">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M12 3L4.5 6.5v5.7c0 4.7 3.1 7.9 7.5 9.8 4.4-1.9 7.5-5.1 7.5-9.8V6.5L12 3Z"/>
            <path d="m9 12 2 2 4-4"/>
          </svg>
        </span>
        <span class="brand-text" style="color:#fff;">TECNO<strong style="color:var(--cyan);">TEK</strong></span>
      </a>

      <div class="footer-links">
        <a href="index.html">Inicio</a>
        <a href="productos.html">Productos</a>
        <a href="nosotros.html">Nosotros</a>
        <a href="contacto.html">Contacto</a>
      </div>

      <small>© <span id="year"></span> TECNOTEK. Todos los derechos reservados.</small>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
