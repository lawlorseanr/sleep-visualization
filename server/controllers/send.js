module.exports = (req, res, next) => {
  res.status(200).json(res.data);
};
