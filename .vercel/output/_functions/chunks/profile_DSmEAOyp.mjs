/* empty css                                   */
import { k as createComponent, l as renderTemplate, q as renderHead, o as createAstro } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  const name = Astro2.url.searchParams.get("name");
  const email = Astro2.url.searchParams.get("email");
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Perfil de Usuario</title>${renderHead()}</head> <body> <h1>Perfil de Usuario</h1> ${name && email ? renderTemplate`<div> <p>Bienvenido, ${name}!</p> <p>Tu email es: ${email}</p> </div>` : renderTemplate`<p>No se encontró información del usuario. Por favor, inicia sesión nuevamente.</p>`} <a href="/">Volver a la página principal</a> </body></html>`;
}, "/Users/macbookpro/Desktop/sancor/src/pages/profile.astro", void 0);

const $$file = "/Users/macbookpro/Desktop/sancor/src/pages/profile.astro";
const $$url = "/profile";

export { $$Profile as default, $$file as file, $$url as url };
