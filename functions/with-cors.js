const cors = require('cors');

// compose func with corst
const withCors = func => (req, res) => {
  var corsFn = cors();
  corsFn(req, res, () => {
    func(req, res);
  });
};

module.exports = withCors;
