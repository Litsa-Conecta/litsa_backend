import { FastifyPluginAsync } from 'fastify';
import { getHubspotContacts } from '../clients/hubspot';

export const crmRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.get('/crm/contacts', async (req, reply) => {
    const contacts = await getHubspotContacts();
    reply.send(contacts);
  });
};

