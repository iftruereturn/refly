
module.exports = (req, res, next) => {
  const userId = req.params.userId;

  if (userId !== req.userId) {
    return res.status(401).end();
  }

  next();
};
