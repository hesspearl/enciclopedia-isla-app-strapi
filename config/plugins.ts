module.exports = {
  graphql: {
    config: {
      shadowCRUD: true,
      endpoint: "/graphql", // <— single GraphQL endpoint
      subscriptions: false,
      maxLimit: -1,
      apolloServer: {},
      v4CompatibilityMode:
        process.env.STRAPI_GRAPHQL_V4_COMPATIBILITY_MODE ?? false,
    },
  },
  "users-permissions": {
    config: {
      jwtSecret: process.env.JWT_SECRET,
    },
  },
};
