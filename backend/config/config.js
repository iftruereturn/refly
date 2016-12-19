// Configuration

const config = {
  app: {
    PORT: 3000,
    KEYS: ['your-session-secret']
  },
  mongo: {
    URL: 'mongodb://localhost/refly'
  }
};

module.exports = config;
