const path = require('path');
const spaRouter = require('express').Router();

spaRouter.get("**", function(req, res) {
  res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = spaRouter;
