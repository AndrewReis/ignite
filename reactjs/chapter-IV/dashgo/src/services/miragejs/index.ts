import { createServer, Model, Factory } from 'miragejs'
import faker from 'faker'

interface User {
  name: string;
  email: string;
  created_at: Date;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },

    // Função cria dados em massa. 
    // Cada função é uma coluna do nosso Model. A função recebe no primeiro parâmetro o indice.
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(10)
        },
      })
    },

    //Função cria préviamente dados para serem mostrados em tela. Vamos combinar o seeds com o factory e gerar 200 users.
    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 1000;

      this.get('/users');
      this.post('/users');

      this.namespace = ''
      this.passthrough();
    }
  })

  return server;
}
