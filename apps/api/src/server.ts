import Fastify from 'fastify';
import cors from '@fastify/cors';
import dotenv from 'dotenv';
dotenv.config();

import { authPlugin } from './plugins/auth';
import { crmRoutes } from './routes/crm';

const app = Fastify();

app.register(cors);
app.register(authPlugin);
app.register(crmRoutes);

app.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
  if (err) throw err;
  console.log(`Server listening on ${address}`);
});

