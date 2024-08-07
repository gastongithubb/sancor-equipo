/* empty css                                   */
import { k as createComponent, l as renderTemplate, m as renderComponent, n as maybeRenderHead } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Container, a as $$Layout } from './Layout_CasM07dZ.mjs';

const $$BalanceMensual = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Balance mensual - Sancor Team Eve garay" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20 mt-32"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <iframe class="h-screen w-screen lg:-ml-44" src="https://docs.google.com/spreadsheets/d/19CBahalKBOGUsce8X2s6SHReSNqAQQyjn5T7YvYOAKg/edit?gid=232434166#gid=232434166rm=minimal"></iframe> ` })} </main> ` })}`;
}, "/Users/macbookpro/Desktop/sancor/src/pages/balance-mensual.astro", void 0);

const $$file = "/Users/macbookpro/Desktop/sancor/src/pages/balance-mensual.astro";
const $$url = "/balance-mensual";

export { $$BalanceMensual as default, $$file as file, $$url as url };
