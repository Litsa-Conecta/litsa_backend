export async function getHubspotContacts() {
  return {
    results: [
      { id: '1', properties: { firstname: 'Juan', lastname: 'Pérez', email: 'juan@example.com' } },
      { id: '2', properties: { firstname: 'Ana', lastname: 'López', email: 'ana@example.com' } },
    ],
  };
}

