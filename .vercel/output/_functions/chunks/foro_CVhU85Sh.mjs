/* empty css                                   */
import { k as createComponent, l as renderTemplate, n as maybeRenderHead, o as createAstro, m as renderComponent } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './Layout_CasM07dZ.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$PostList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostList;
  let posts = [];
  const examplePosts = [
    { id: 1, title: "Primera publicaci\xF3n", content: "Contenido de la primera publicaci\xF3n", date: "2024-07-13" },
    { id: 2, title: "Segunda publicaci\xF3n", content: "Contenido de la segunda publicaci\xF3n", date: "2024-07-14" }
  ];
  posts = examplePosts;
  try {
    const response = await fetch("https://api.example.com/posts");
    posts = await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  return renderTemplate`${maybeRenderHead()}<div class="space-y-4"> ${posts.map((post) => renderTemplate`<div class="p-4 bg-white rounded-lg shadow-card"> <h2 class="mb-2 text-xl font-bold text-black">${post.title}</h2> <p class="mb-2 text-zinc-800">${post.content}</p> <span class="text-sm text-zinc-500">${post.date}</span> </div>`)} </div>`;
}, "/Users/macbookpro/Desktop/sancor/src/components/PostList.astro", void 0);

const $$Astro = createAstro();
const $$PostForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostForm;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="postForm" class="p-4 space-y-4 rounded-lg bg-zinc-100"> <div> <label for="title" class="block mb-2 text-black">Título</label> <input type="text" id="title" class="w-full p-2 border rounded border-zinc-300" required> </div> <div> <label for="content" class="block mb-2 text-black">Contenido</label> <textarea id="content" class="w-full p-2 border rounded border-zinc-300" rows="4" required></textarea> </div> <button type="submit" class="px-4 py-2 text-white rounded bg-lime hover:bg-opacity-90">
Publicar
</button> </form> `;
}, "/Users/macbookpro/Desktop/sancor/src/components/PostForm.astro", void 0);

const $$Foro = createComponent(($$result, $$props, $$slots) => {
  const handleSubmit = (title, content) => {
    console.log(title, content);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mi Foro" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container px-4 py-8 mx-auto"> <h1 class="mb-8 text-3xl font-bold text-black">Mi Foro</h1> ${renderComponent($$result2, "PostList", $$PostList, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/macbookpro/Desktop/sancor/src/components/PostList.astro", "client:component-export": "default" })} ${renderTemplate`<div class="mt-8"> <h2 class="mb-4 text-2xl font-bold text-black">Crear Nueva Publicación</h2> ${renderComponent($$result2, "PostForm", $$PostForm, { "onSubmit": handleSubmit })} </div>`} </main> ` })}`;
}, "/Users/macbookpro/Desktop/sancor/src/pages/foro.astro", void 0);

const $$file = "/Users/macbookpro/Desktop/sancor/src/pages/foro.astro";
const $$url = "/foro";

export { $$Foro as default, $$file as file, $$url as url };
