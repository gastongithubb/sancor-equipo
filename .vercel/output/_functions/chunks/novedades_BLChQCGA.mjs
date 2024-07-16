/* empty css                                   */
import { k as createComponent, l as renderTemplate, n as maybeRenderHead, p as addAttribute, m as renderComponent } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './Layout_CasM07dZ.mjs';
import 'clsx';
import { g as getNews } from './database_imsHSw4I.mjs';

const $$NewsManager = createComponent(async ($$result, $$props, $$slots) => {
  let news = [];
  let error = null;
  try {
    news = await getNews();
  } catch (err) {
    console.error("Error fetching news:", err);
    error = "Error al obtener las noticias";
  }
  return renderTemplate`${maybeRenderHead()}<div class="max-w-4xl mx-auto p-6 bg-zinc-100 rounded-lg shadow-card font-SpaceGrotesk"> <h2 class="text-3xl font-bold mb-6 text-black">Gestor de Noticias</h2> ${error && renderTemplate`<div class="bg-red border-l-4 border-stone text-stone p-4 mb-6" role="alert"> <p>${error}</p> </div>`} <form id="addNewsForm" class="mb-8 bg-white p-6 rounded-lg shadow-card"> <div class="mb-4"> <label for="url" class="block text-sm font-medium text-black mb-2">URL</label> <input type="text" id="url" name="url" placeholder="https://ejemplo.com/noticia" required class="w-full px-3 py-2 placeholder-zinc-500 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"> </div> <div class="mb-4"> <label for="title" class="block text-sm font-medium text-black mb-2">Título</label> <input type="text" id="title" name="title" placeholder="Título de la noticia" required class="w-full px-3 py-2 placeholder-zinc-500 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"> </div> <div class="mb-6"> <label for="publishDate" class="block text-sm font-medium text-black mb-2">Fecha de publicación</label> <input type="date" id="publishDate" name="publishDate" required class="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime focus:border-transparent"> </div> <button type="submit" class="w-full bg-lime text-white py-2 px-4 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-lime focus:ring-opacity-50 transition duration-300">
Añadir Noticia
</button> </form> <ul id="newsList" class="space-y-4"> ${news.map((item) => renderTemplate`<li class="bg-white p-4 rounded-lg shadow-card flex items-center justify-between transition duration-300 hover:shadow-lg"> <div> <a${addAttribute(item.url, "href")} target="_blank" rel="noopener noreferrer" class="text-lime hover:text-black font-medium">${item.title}</a> <span class="text-sm text-zinc-500 ml-2">- ${item.publishDate}</span> </div> <div class="space-x-2"> <button class="delete-news px-3 py-1 bg-red text-stone rounded hover:bg-stone hover:text-white focus:outline-none focus:ring-2 focus:ring-red focus:ring-opacity-50 transition duration-300"${addAttribute(item.id, "data-id")}>
Eliminar
</button> <button class="toggle-estado px-3 py-1 bg-zinc-300 text-stone rounded hover:bg-stone hover:text-white focus:outline-none focus:ring-2 focus:ring-zinc-300 focus:ring-opacity-50 transition duration-300"${addAttribute(item.id, "data-id")}> ${item.estado === 1 ? "Desactivar" : "Activar"} </button> </div> </li>`)} </ul> </div> `;
}, "/Users/macbookpro/Desktop/sancor/src/components/NewsManager.astro", void 0);

const $$Novedades = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gestor de Noticias" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "NewsManager", $$NewsManager, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/macbookpro/Desktop/sancor/src/components/NewsManager.astro", "client:component-export": "default" })} </main> ` })}`;
}, "/Users/macbookpro/Desktop/sancor/src/pages/novedades.astro", void 0);

const $$file = "/Users/macbookpro/Desktop/sancor/src/pages/novedades.astro";
const $$url = "/novedades";

export { $$Novedades as default, $$file as file, $$url as url };
