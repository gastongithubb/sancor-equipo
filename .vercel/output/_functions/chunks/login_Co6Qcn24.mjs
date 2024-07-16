/* empty css                                   */
import { k as createComponent, l as renderTemplate, n as maybeRenderHead, m as renderComponent } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { a as $$Layout } from './Layout_CasM07dZ.mjs';

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-center min-h-screen bg-zinc-900"> <div class="w-full max-w-md p-6 m-4 space-y-6 rounded-lg bg-zinc-800 shadow-card"> <div class="text-center"> <h2 class="text-2xl font-bold text-lime sm:text-3xl">Iniciar sesión con Google</h2> <p class="mt-2 text-sm text-zinc-400 sm:text-base">Accede a tu cuenta usando Google</p> </div> <div class="text-center"> <button id="googleLoginButton" class="w-full px-4 py-2 mt-2 text-sm font-medium text-white rounded-md bg-lime hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
Iniciar sesión con Google
</button> </div> <p class="text-xs text-center text-zinc-400 sm:text-sm">
¿No tienes una cuenta?${" "} <a href="/register" class="font-medium text-lime hover:text-white">
Registrarse
</a> </p> </div> </div> `;
}, "/Users/macbookpro/Desktop/sancor/src/components/LoginForm.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar Sesion" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "LoginForm", $$LoginForm, {})} ` })}`;
}, "/Users/macbookpro/Desktop/sancor/src/pages/login.astro", void 0);

const $$file = "/Users/macbookpro/Desktop/sancor/src/pages/login.astro";
const $$url = "/login";

export { $$Login as default, $$file as file, $$url as url };
