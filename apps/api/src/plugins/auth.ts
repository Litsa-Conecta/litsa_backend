import { createClerkClient } from '@clerk/clerk-sdk-node';
import { FastifyRequest, FastifyReply } from 'fastify';
import { Session } from '@clerk/clerk-sdk-node';

declare module 'fastify' {
  interface FastifyRequest {
    auth?: Record<string, any>; // Tipo genérico que acepta cualquier payload
  }
}


export async function authPlugin(fastify: any) {
  const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY! });

  fastify.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
    const token = request.headers.authorization?.replace('Bearer ', '');
    if (token) {
const session = await clerk.verifyToken(token);
      request.auth = session;
    } else {
      reply.code(401).send({ message: 'Unauthorized' });
    }
  });
}

