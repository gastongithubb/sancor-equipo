import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

const tursoConnectionUrl = "libsql://metrics-nps-gastongithubb.turso.io";
const tursoAuthToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjA0MzM2MDEsImlkIjoiYjI2MjM2YmUtYWExYS00YzY4LTk2MDktZDg3NDNhZGUxODViIn0.U3AVybGtI0-CuzB0daVpbDgEw8b3ijc9n2HhK_yvJwx5jtD_ViAqOsUJP2shasHbyqeFT0ATBASmA5RDHdihDA";
const googleClientId = "937366145803-0mt1d38qujv81s04qqst1etm917i5gms.apps.googleusercontent.com";
const googleClientSecret = "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";
const config = {
  tursoConnectionUrl,
  tursoAuthToken,
  googleClientId,
  googleClientSecret
  // ... otras configuraciones si las necesitas
};

console.log("Configuración de la base de datos:", {
  url: config.tursoConnectionUrl,
  authToken: "***" 
});
const client = createClient({
  url: config.tursoConnectionUrl,
  authToken: config.tursoAuthToken
});
const db = drizzle(client);
const employees = sqliteTable("employees", {
  id: integer("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  dni: text("dni").notNull(),
  entryTime: text("entry_time").notNull(),
  exitTime: text("exit_time").notNull(),
  hoursWorked: integer("hours_worked").notNull(),
  xLite: text("x_lite").notNull()
});
const breakSchedules = sqliteTable("break_schedules", {
  id: integer("id").primaryKey(),
  employeeId: integer("employee_id").notNull(),
  day: text("day").notNull(),
  startTime: text("start_time").notNull(),
  endTime: text("end_time").notNull(),
  week: integer("week").notNull(),
  month: integer("month").notNull(),
  year: integer("year").notNull()
});
sqliteTable("users", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  responses: integer("responses").notNull().default(0),
  nps: integer("nps").notNull().default(0),
  csat: integer("csat").notNull().default(0),
  rd: integer("rd").notNull().default(0)
});
const news = sqliteTable("news", {
  id: integer("id").primaryKey(),
  url: text("url").notNull(),
  title: text("title").notNull(),
  publishDate: text("publish_date").notNull(),
  estado: integer("estado").notNull().default(1)
  // 1 for active, 0 for inactive
});
async function ensureTablesExist() {
  try {
    console.log("Iniciando la inicialización de la base de datos...");
    await client.execute(`
      CREATE TABLE IF NOT EXISTS employees (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        dni TEXT NOT NULL,
        entry_time TEXT NOT NULL,
        exit_time TEXT NOT NULL,
        hours_worked INTEGER NOT NULL,
        x_lite TEXT NOT NULL
      )
    `);
    await client.execute(`
      CREATE TABLE IF NOT EXISTS break_schedules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        employee_id INTEGER NOT NULL,
        day TEXT NOT NULL,
        start_time TEXT NOT NULL,
        end_time TEXT NOT NULL,
        week INTEGER NOT NULL,
        month INTEGER NOT NULL,
        year INTEGER NOT NULL
      )
    `);
    await client.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        responses INTEGER NOT NULL DEFAULT 0,
        nps INTEGER NOT NULL DEFAULT 0,
        csat INTEGER NOT NULL DEFAULT 0,
        rd INTEGER NOT NULL DEFAULT 0
      )
    `);
    await client.execute(`
      CREATE TABLE IF NOT EXISTS news (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        url TEXT NOT NULL,
        title TEXT NOT NULL,
        publish_date TEXT NOT NULL,
        estado INTEGER NOT NULL DEFAULT 1
      )
    `);
    console.log("Inicialización de la base de datos completada con éxito");
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
    throw error;
  }
}
async function getEmployees() {
  try {
    await ensureTablesExist();
    return await db.select().from(employees).all();
  } catch (error) {
    console.error("Error al obtener empleados:", error);
    throw new Error(`No se pudieron obtener los empleados: ${error instanceof Error ? error.message : String(error)}`);
  }
}
async function getBreakSchedules(employeeId, month, year) {
  try {
    await ensureTablesExist();
    return await db.select().from(breakSchedules).where(sql`employee_id = ${employeeId} AND month = ${month} AND year = ${year}`).all();
  } catch (error) {
    console.error("Error al obtener horarios de break:", error);
    throw new Error(`No se pudieron obtener los horarios de break: ${error instanceof Error ? error.message : String(error)}`);
  }
}
async function getNews() {
  try {
    await ensureTablesExist();
    return await db.select().from(news).all();
  } catch (error) {
    console.error("Error al obtener novedades:", error);
    throw new Error(`No se pudieron obtener las novedades: ${error instanceof Error ? error.message : String(error)}`);
  }
}

export { getEmployees as a, getBreakSchedules as b, getNews as g };
