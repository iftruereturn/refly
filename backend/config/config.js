// Configuration

const config = {
  app: {
    PORT: 3000,
    KEYS: ['your-session-secret']
  },
  mongo: {
    URL: 'mongodb://localhost:27017/refly'
  }
};

module.exports = config;
