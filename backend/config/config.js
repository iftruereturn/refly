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
    SECRET: '9b1a0db3ee88630ae083505e48faea2c7d38ba4a33949adacebfe391fb2c0001'
  }
};

module.exports = config;
