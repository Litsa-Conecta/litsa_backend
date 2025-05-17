import Fastify from 'fastify';
import cors from '@fastify/cors';

const app = Fastify();

app.register(cors, {
  origin: '*',
});

app.get('/', async (request, reply) => {
  return { message: 'LITSA Backend Activo 🚀' };
});

// Este es el punto clave 👇
const port = Number(process.env.PORT) || 3000;

app.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor corriendo en ${address}`);
});

