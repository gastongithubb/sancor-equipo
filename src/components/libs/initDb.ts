
import { ensureTablesExist } from './database';

let isInitialized = false;

export async function ensureDbInitialized() {
  if (!isInitialized) {
    await ensureTablesExist();
    isInitialized = true;
    console.log('Base de datos inicializada');
  }
}
