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
    "rest-cache": {
      enabled: true,
      config: {
        provider: "memory", // or 'redis' if you want external cache
        maxAge: 60000, // cache for 60 seconds
        hitpass: false, // whether to bypass cache on certain conditions
      },
    },
  },
};
