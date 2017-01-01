// Configuration
const config = {
  app: {
    PORT: 3000,
    KEYS: ['your-session-secret']
  },
  mongo: {
    URL: 'mongodb://localhost/refly'
  },
  jwt: {
    SECRET: 'Really really secret! Sh!'
  }
};

module.exports = config;
