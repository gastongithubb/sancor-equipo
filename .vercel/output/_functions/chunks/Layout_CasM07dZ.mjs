import { k as createComponent, l as renderTemplate, n as maybeRenderHead, t as renderSlot, m as renderComponent, p as addAttribute, o as createAstro, q as renderHead } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                                   */
import 'clsx';

const $$Container = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-screen-xl px-6 mx-auto md:px-14 xl:px-14"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/macbookpro/Desktop/sancor/src/components/Container.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navLinks = [
    { href: "/nps-trimestral", label: "NPS - Trimestral" },
    { href: "/#casos", label: "Casos derivar / cerrar" },
    { href: "/promotores", label: "Promotores" },
    { href: "/balance-mensual", label: "Balance Mensual" },
    { href: "/foro", label: "Foro" },
    // { href: '/metricas', label: 'Metricas trimestrales' },
    { href: "/nps-individual", label: "NPS-Individual" }
  ];
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- CSS --><!-- HTML -->", '<header class="mt-20" data-astro-cid-5blmo7yk> <nav class="fixed top-0 left-0 z-50 w-full bg-white shadow-md" data-astro-cid-5blmo7yk> ', ` </nav> </header> <main class="main-content" data-astro-cid-5blmo7yk> <!-- Aqu\xED va tu contenido principal --> </main> <script>
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar-default');
  if (navbar) {
    const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navLinks = navbar.querySelectorAll('a');

    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
        navbar.classList.toggle('flex');
      });
    } else {
      console.warn("Navbar toggle button not found. Toggle functionality might be affected.");
    }

    navLinks.forEach(link => link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        navbar.classList.add('hidden');
        navbar.classList.remove('flex');
      }
    }));
  } else {
    console.warn("Navbar element with ID 'navbar-default' not found. Navigation functionality might be affected.");
  }
});
<\/script>`])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "class": "navbar-container", "data-astro-cid-5blmo7yk": true }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap items-center justify-between py-3 mx-auto" data-astro-cid-5blmo7yk> <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-astro-cid-5blmo7yk> <img src="/Logo.webp" class="w-44" alt="Logo" data-astro-cid-5blmo7yk> </a> <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2" aria-controls="navbar-default" aria-expanded="false" data-astro-cid-5blmo7yk> <span class="sr-only" data-astro-cid-5blmo7yk>Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-astro-cid-5blmo7yk> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-astro-cid-5blmo7yk></path> </svg> </button> <div class="hidden w-full md:flex md:items-center md:w-auto" id="navbar-default" data-astro-cid-5blmo7yk> <ul class="flex flex-col p-4 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:p-0" data-astro-cid-5blmo7yk> ${navLinks.map((link) => renderTemplate`<li data-astro-cid-5blmo7yk> <a${addAttribute(link.href, "href")} class="block px-3 py-2 text-black rounded md:bg-transparent md:p-0 hover:text-gray-700" data-astro-cid-5blmo7yk>${link.label}</a> </li>`)} </ul> <a href="/login" class="ml-4 login-button" data-astro-cid-5blmo7yk> <svg class="w-5 h-5 login-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-5blmo7yk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" data-astro-cid-5blmo7yk></path> </svg>
Iniciar sesión
</a> </div> </div> ` }));
}, "/Users/macbookpro/Desktop/sancor/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-[#6F88CD] text-zinc-900 font-SpaceGrotesk" data-astro-cid-sz7xmlte> ', ` </footer> <div id="whatsapp-container" class="fixed z-50 bottom-4 right-4" data-astro-cid-sz7xmlte> <a href="https://api.whatsapp.com/send?phone=5493513818385" target="_blank" rel="noopener noreferrer" class="block" aria-label="Chat on WhatsApp" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 39 39" data-astro-cid-sz7xmlte> <path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z" data-astro-cid-sz7xmlte></path> <path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z" data-astro-cid-sz7xmlte></path> </svg> </a> <div id="whatsapp-popup" class="absolute right-0 hidden w-64 p-4 bg-black rounded-lg shadow-xl bottom-16" data-astro-cid-sz7xmlte> <p class="text-sm text-white" data-astro-cid-sz7xmlte>Hola, soy Eve, cualquier duda que tengas, porfa consultame asi te puedo ayudar \u{1F60A} </p> </div> </div> <script>
    const year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = \`\${year}\`;

    let popupShown = false;
    const whatsappPopup = document.getElementById('whatsapp-popup');

    window.addEventListener('scroll', () => {
        if (!popupShown && window.scrollY > 300) { // Muestra el popup despu\xE9s de 300px de scroll
            whatsappPopup.classList.remove('hidden');
            popupShown = true;
            
            // Oculta el popup despu\xE9s de 5 segundos
            setTimeout(() => {
                whatsappPopup.classList.add('hidden');
            }, 5000);
        }
    });

    // Cierra el popup al hacer clic en cualquier parte
    document.addEventListener('click', (event) => {
        if (!whatsappPopup.contains(event.target) && !popupShown) {
            whatsappPopup.classList.add('hidden');
        }
    });
<\/script> `], ["", '<footer class="bg-[#6F88CD] text-zinc-900 font-SpaceGrotesk" data-astro-cid-sz7xmlte> ', ` </footer> <div id="whatsapp-container" class="fixed z-50 bottom-4 right-4" data-astro-cid-sz7xmlte> <a href="https://api.whatsapp.com/send?phone=5493513818385" target="_blank" rel="noopener noreferrer" class="block" aria-label="Chat on WhatsApp" data-astro-cid-sz7xmlte> <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 39 39" data-astro-cid-sz7xmlte> <path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z" data-astro-cid-sz7xmlte></path> <path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z" data-astro-cid-sz7xmlte></path> </svg> </a> <div id="whatsapp-popup" class="absolute right-0 hidden w-64 p-4 bg-black rounded-lg shadow-xl bottom-16" data-astro-cid-sz7xmlte> <p class="text-sm text-white" data-astro-cid-sz7xmlte>Hola, soy Eve, cualquier duda que tengas, porfa consultame asi te puedo ayudar \u{1F60A} </p> </div> </div> <script>
    const year = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = \\\`\\\${year}\\\`;

    let popupShown = false;
    const whatsappPopup = document.getElementById('whatsapp-popup');

    window.addEventListener('scroll', () => {
        if (!popupShown && window.scrollY > 300) { // Muestra el popup despu\xE9s de 300px de scroll
            whatsappPopup.classList.remove('hidden');
            popupShown = true;
            
            // Oculta el popup despu\xE9s de 5 segundos
            setTimeout(() => {
                whatsappPopup.classList.add('hidden');
            }, 5000);
        }
    });

    // Cierra el popup al hacer clic en cualquier parte
    document.addEventListener('click', (event) => {
        if (!whatsappPopup.contains(event.target) && !popupShown) {
            whatsappPopup.classList.add('hidden');
        }
    });
<\/script> `])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "data-astro-cid-sz7xmlte": true }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-between py-6" data-astro-cid-sz7xmlte> <div data-astro-cid-sz7xmlte> <img class="w-44" src="/Logo.webp" alt="Logo" data-astro-cid-sz7xmlte> </div> <div class="text-right" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>@ 2024<span id="currentYear" data-astro-cid-sz7xmlte></span> Administracion y Soporte <em data-astro-cid-sz7xmlte>Gaston Alvarez</em></p> <p data-astro-cid-sz7xmlte>Made with <a href="https://astro.build/" target="_blank" rel="noopener noreferrer" class="underline transition-colors duration-300 hover:text-white" data-astro-cid-sz7xmlte>Astro</a></p> </div> </div> ` }));
}, "/Users/macbookpro/Desktop/sancor/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/macbookpro/Desktop/sancor/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description" content="A beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Positivus is the perfect template to showcase your agency's services and case studies to potential clients. Built with astro and tailwindcss"><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white font-SpaceGrotesk"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/macbookpro/Desktop/sancor/src/layouts/Layout.astro", void 0);

export { $$Container as $, $$Layout as a };
