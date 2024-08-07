import { k as createComponent, l as renderTemplate, n as maybeRenderHead, o as createAstro } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <span class="text-4xl sm:text-6xl px-1.5 font-medium bg-lime rounded-md"> ${title} </span> <p class="text-xl font-normal text-center md:text-start lg:w-2/3"> ${description} </p> </div>`;
}, "/Users/macbookpro/Desktop/sancor/src/components/Topic.astro", void 0);

const team = [
	{
		title: "Supervisora",
		name: "Evelin Garay",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 8 hs",
		email: "mail: eve-garay@sancor.konecta.ar",
		profile: "/team/eve.jpg",
		link: "/",
		"cumpleaños": "1980-05-15"
	},
	{
		title: "CX Agent",
		name: "Abigail Veyga",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: maria.veyga@sancor.konecta.ar",
		profile: "/team/abi.jpg",
		link: "/",
		"cumpleaños": "31 de Agosto"
	},
	{
		title: "CX Agent",
		name: "Agustin Suarez",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 6 hs",
		email: "mail: agustin.suarez@sancor.konecta.ar",
		profile: "/team/agustin.jpg",
		link: "/",
		"cumpleaños": "08 de Marzo"
	},
	{
		title: "CX Agent",
		name: "Antonella Casas",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 6 hs",
		email: "mail: antonella.casas@sancor.konecta.ar",
		profile: "/team/none.webp",
		link: "/",
		"cumpleaños": "15 de Julio"
	},
	{
		title: "CX Agent",
		name: "Auca Heil",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 6 hs",
		email: "mail: auca.heil@sancor.konecta.ar",
		profile: "/team/auca.jpg",
		link: "/",
		"cumpleaños": "27 de Febrero"
	},
	{
		title: "CX Agent",
		name: "Maria Laura Carrizo Tula",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: maria.carrizo@sancor.konecta.ar",
		profile: "/team/tula.jpg",
		link: "/",
		"cumpleaños": "26 de Enero"
	},
	{
		title: "CX Agent",
		name: "Danna Cruz",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: danna.cruz@sancor.konecta.ar",
		profile: "/team/none.webp",
		link: "/",
		"cumpleaños": "02 de Junio"
	},
	{
		title: "CX Agent",
		name: "Franco Alvarez",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 5 hs",
		email: "mail: franco.alvarez@sancor.konecta.ar",
		profile: "/team/franco.jpg",
		link: "/",
		"cumpleaños": "05 de Julio"
	},
	{
		title: "CX Agent",
		name: "Gaston Alvarez",
		description: "Sancor Salud -  mail: gaston.alvarez@sancor.konecta.ar",
		contrato: "Contrato: 5 hs",
		email: "mail: eve-garay@sancor.konecta.ar",
		profile: "/team/gaston.jpeg",
		link: "/",
		"cumpleaños": "29 de Diciembre"
	},
	{
		title: "CX Agent",
		name: "Javier Rodriguez",
		description: "Sancor Salud - Konecta ",
		contrato: "Contrato: 7 hs",
		email: "mail: angel.rodriguez@sancor.konecta.ar",
		profile: "/team/none.webp",
		link: "/",
		"cumpleaños": "18 de Noviembre"
	},
	{
		title: "CX Agent",
		name: "Jeremías Flores",
		description: "Sancor Salud - Konecta ",
		contrato: "Contrato: 6 hs",
		email: "mail: jeremias.britos@sancor.konecta.ar",
		profile: "/team/jeremias.jpg",
		link: "/",
		"cumpleaños": "10 de Abril"
	},
	{
		title: "CX Agent",
		name: "Karen Aranda",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: karen.aranda@sancor.konecta.ar",
		profile: "/team/none.webp",
		link: "/",
		"cumpleaños": "07 de Julio"
	},
	{
		title: "CX Agent",
		name: "Karen Chavez",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 5 hs",
		email: "mail: karen.chavez@sancor.konecta.ar",
		profile: "/team/karenj.jpg",
		link: "/",
		"cumpleaños": "25 de Octubre"
	},
	{
		title: "CX Agent",
		name: "Lautaro Brocal",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: lautaro.brocal@sancor.konecta.arr",
		profile: "/team/lauta.jpg",
		link: "/",
		"cumpleaños": "03 de Septiembre"
	},
	{
		title: "CX Agent",
		name: "Macarena Gomez",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 6 hs",
		email: "mail: macarena.gomez@sancor.konecta.ar",
		profile: "/team/maca.jpg",
		link: "/",
		"cumpleaños": "15 de Enero"
	},
	{
		title: "CX Agent",
		name: "Marcos Montenegro",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: marcos.montenegro@sancor.konecta.ar",
		profile: "/team/marcos.jpg",
		link: "/",
		"cumpleaños": "31 de Diciembre"
	},
	{
		title: "CX Agent",
		name: "Milagros Juncos",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 6 hs",
		email: "mail: milagros.juncos@sancor.konecta.ar",
		profile: "/team/mili.jpg",
		link: "/",
		"cumpleaños": "23 de Enero"
	},
	{
		title: "CX Agent",
		name: "Nicolas Macagno",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 6 hs",
		email: "mail: leonardo.macagno@sancor.konecta.ar",
		profile: "/team/lean.jpg",
		link: "/",
		"cumpleaños": "05 de Marzo"
	},
	{
		title: "CX Agent",
		name: "Victoria Martinez",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: victoria.martinez@sancor.konecta.ar",
		profile: "/team/vicky.jpg",
		link: "/",
		"cumpleaños": "14 de Mayo"
	},
	{
		title: "CX Agent",
		name: "Ismael Irirarte",
		description: "Sancor Salud - Konecta ",
		contrato: "Contrato: 5 hs",
		email: " mail: ismael.iriarte@sancor.konecta.ar",
		profile: "/team/ismael.jpg",
		link: "/",
		"cumpleaños": "15 de Septiembre"
	},
	{
		title: "CX Agent",
		name: "Zaida Abregu",
		description: "Sancor Salud - Konecta  ",
		contrato: "Contrato: 7 hs",
		email: "mail: zaida.abregu@sancor.konecta.ar",
		profile: "/team/zaida.jpeg",
		link: "/",
		"cumpleaños": "26 de Abril"
	}
];
const process = [
	{
		label: "Desarrolla Empatía y Escucha Activa",
		content: "Prioriza entender las preocupaciones y necesidades de cada asociado. Escucha activamente y muestra empatía en cada interacción para construir relaciones sólidas."
	},
	{
		label: "Autorización",
		content: "Durante la llamada inicial, discutimos el proceso de autorización necesario para los servicios médicos requeridos, asegurando comprensión y claridad en cada paso."
	},
	{
		label: "Facturación",
		content: "Explicamos y gestionamos consultas relacionadas con la facturación de servicios médicos y procedimientos realizados, garantizando transparencia y exactitud en la información proporcionada."
	},
	{
		label: "Carga de Documentación",
		content: "Guiamos sobre el procedimiento para la carga y gestión de documentación necesaria, asegurando que se complete de manera adecuada y oportuna para facilitar los procesos administrativos."
	},
	{
		label: "Reporte y Seguimiento",
		content: "Proporcionamos seguimiento detallado y reportes sobre el estado de las consultas realizadas y las acciones tomadas, asegurando que las necesidades administrativas sean atendidas de manera efectiva."
	},
	{
		label: "Mejora Continua",
		content: "Buscamos constantemente optimizar nuestros procesos y servicios basados en la retroalimentación de los asociados, asegurando una atención eficiente y satisfactoria."
	}
];
const teamData = {
	team: team,
	process: process
};

export { $$Topic as $, teamData as t };
