// Configuration

const config = {
  app: {
    PORT: 3000,
    KEYS: ['your-session-secret']
  },
  mongo: {
    URL: 'mongodb://127.0.0.1/refly'
  }
};

module.exports = config;
