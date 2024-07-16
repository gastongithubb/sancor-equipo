/* empty css                                   */
import { k as createComponent, l as renderTemplate, n as maybeRenderHead, m as renderComponent, p as addAttribute, F as Fragment } from './astro/server_q1UfLich.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx } from 'preact/jsx-runtime';
import { a as getEmployees, b as getBreakSchedules } from './database_imsHSw4I.mjs';
import { $ as $$Container, a as $$Layout } from './Layout_CasM07dZ.mjs';

const Table = ({
  children
}) => jsx("div", {
  className: "overflow-x-auto",
  children: jsx("table", {
    className: "w-full text-left",
    children
  })
});
const TableHeader = ({
  children
}) => jsx("thead", {
  className: "bg-gray-700",
  children
});
const TableBody = ({
  children
}) => jsx("tbody", {
  children
});
const TableRow = ({
  children
}) => jsx("tr", {
  className: "border-b border-gray-600",
  children
});
const TableHead = ({
  children
}) => jsx("th", {
  className: "px-4 py-2 font-medium text-gray-300",
  children
});
const TableCell = ({
  children,
  className = ""
}) => jsx("td", {
  className: `px-4 py-2 ${className}`,
  children
});

const $$EmployeeList = createComponent(async ($$result, $$props, $$slots) => {
  const days = ["Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes"];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
  let employees = [];
  let breakSchedules = {};
  let error = null;
  try {
    employees = await getEmployees();
    for (const employee of employees) {
      breakSchedules[employee.id] = await getBreakSchedules(employee.id, currentMonth, currentYear);
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    error = `Error al cargar los datos: ${err instanceof Error ? err.message : String(err)}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="container p-4 mx-auto"> <h2 class="mb-4 text-2xl font-bold">Programacion Semanal</h2> ${error && renderTemplate`<div class="flex flex-col items-center justify-center h-screen"> <p class="text-lg font-semibold text-red-600">${error}</p> </div>`} ${!error && employees.length === 0 ? renderTemplate`<p>No hay empleados para mostrar.</p>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Table", Table, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TableHeader", TableHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TableRow", TableRow, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Apellido y Nombre` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Email` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`DNI` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Ingreso` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Egreso` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Hs. Trabajo` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`X LITE` })} ` })} ` })} ${renderComponent($$result3, "TableBody", TableBody, {}, { "default": ($$result4) => renderTemplate`${employees.map((employee) => renderTemplate`${renderComponent($$result4, "TableRow", TableRow, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate`${employee.lastName}${employee.firstName}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate`${employee.email}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate`${employee.dni}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate`${employee.entryTime}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate`${employee.exitTime}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate`${employee.hoursWorked}` })} ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate` <input type="text"${addAttribute(employee.xLite || "", "value")}${addAttribute(employee.id, "data-employee-id")} class="px-2 py-1 border rounded x-lite-input"> ` })} ` })}`)}` })} ` })} <button id="saveEmployeeChanges" class="px-4 py-2 mt-4 font-bold text-white rounded bg-[#000] hover:bg-black">
Guardar Cambios en Empleados
</button> <h3 class="mt-8 mb-4 text-xl font-bold">Horarios de Break</h3> <div class="mb-4"> <input type="text" placeholder="Buscar empleado..." id="searchInput" class="w-full px-2 py-1 border rounded"> </div> ${employees.map((employee) => renderTemplate`<div class="mb-8 employee-break-schedule"${addAttribute(employee.id, "data-employee-id")}> <h4 class="mb-2 text-lg font-semibold">${employee.firstName} ${employee.lastName}</h4> ${renderComponent($$result2, "Table", Table, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TableHeader", TableHeader, {}, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "TableRow", TableRow, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Día` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Semana 1` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Semana 2` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Semana 3` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Semana 4` })} ${renderComponent($$result5, "TableHead", TableHead, {}, { "default": ($$result6) => renderTemplate`Semana 5` })} ` })} ` })} ${renderComponent($$result3, "TableBody", TableBody, {}, { "default": ($$result4) => renderTemplate`${days.map((day) => renderTemplate`${renderComponent($$result4, "TableRow", TableRow, {}, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate`${day}` })} ${[1, 2, 3, 4, 5].map((week) => {
    const schedule = breakSchedules[employee.id]?.find(
      (s) => s.day === day && s.week === week && s.month === currentMonth && s.year === currentYear
    ) || { startTime: "" };
    return renderTemplate`${renderComponent($$result5, "TableCell", TableCell, {}, { "default": ($$result6) => renderTemplate` <input type="time"${addAttribute(schedule.startTime, "value")}${addAttribute(employee.id, "data-employee-id")}${addAttribute(day, "data-day")}${addAttribute(week, "data-week")} class="px-2 py-1 border rounded break-schedule-input"> ` })}`;
  })}` })}`)}` })} ` })} </div>`)}<button id="saveBreakChanges" class="px-4 py-2 mt-4 font-bold text-white rounded bg-[#000] hover:bg-black">
Guardar Cambios en Horarios de Break
</button> ` })}`} </div> `;
}, "/Users/macbookpro/Desktop/sancor/src/components/EmployeeList.astro", void 0);

const $$Programacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Lista de Empleados" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "EmployeeList", $$EmployeeList, {})} ` })} ` })}`;
}, "/Users/macbookpro/Desktop/sancor/src/pages/programacion.astro", void 0);

const $$file = "/Users/macbookpro/Desktop/sancor/src/pages/programacion.astro";
const $$url = "/programacion";

export { $$Programacion as default, $$file as file, $$url as url };
