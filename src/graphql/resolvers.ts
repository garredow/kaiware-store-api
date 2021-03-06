import { IResolvers } from 'mercurius';

export const resolvers: IResolvers = {
  Query: {
    user(root, args, { dataClient }, info) {
      return {};
    },
    category(root, { id }, { dataClient }, info) {
      return dataClient.category.getById(id);
    },
    categories(root, args, { dataClient }, info) {
      return dataClient.category.getAll();
    },
    person(root, { id }, { dataClient }, info) {
      return dataClient.person.getById(id);
    },
    people(root, args, { dataClient }, info) {
      return dataClient.person.getAll();
    },
    app(root, { id }, { dataClient }, info) {
      return dataClient.app.getById(id);
    },
    release(root, { id }, { dataClient }, info) {
      return dataClient.release.getById(id);
    },
    async health(root, args, { dataClient }, info) {
      return dataClient.meta.health();
    },
  },
  Category: {
    apps(category, args, { dataClient }, info) {
      return dataClient.app.getByCategoryId(category.id);
    },
  },
  App: {
    authors(app, args, { dataClient }, info) {
      return dataClient.person.getAuthorsByAppId(app.id);
    },
    maintainers(app, args, { dataClient }, info) {
      return dataClient.person.getMaintainersByAppId(app.id);
    },
    categories(app, args, { dataClient }, info) {
      return dataClient.category.getByAppId(app.id);
    },
    releases(app, args, { dataClient }, info) {
      return dataClient.release.getByAppId(app.id);
    },
  },
  Person: {
    apps(person, args, { dataClient }, info) {
      return dataClient.app.getByPersonId(person.id);
    },
  },
};
