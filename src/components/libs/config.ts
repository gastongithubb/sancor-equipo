// src/config.ts

// Importa las variables de entorno directamente
const tursoConnectionUrl = import.meta.env.PUBLIC_TURSO_DATABASE_URL as string;
const tursoAuthToken = import.meta.env.PUBLIC_TURSO_AUTH_TOKEN as string;
const googleClientId = import.meta.env.GOOGLE_CLIENT_ID as string;
const googleClientSecret = import.meta.env.GOOGLE_CLIENT_SECRET as string;

// Configuración de la aplicación
export const config = {
  tursoConnectionUrl,
  tursoAuthToken,
  googleClientId,
  googleClientSecret,
  // ... otras configuraciones si las necesitas
};

// Validación de la configuración
if (!tursoConnectionUrl || !tursoAuthToken) {
  throw new Error('Las variables de entorno PUBLIC_TURSO_DATABASE_URL y PUBLIC_TURSO_AUTH_TOKEN deben estar definidas');
}

if (!googleClientId || !googleClientSecret) {
  throw new Error('Las variables de entorno GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET deben estar definidas');
}

export default config;