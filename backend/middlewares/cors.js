const allowedSites = [
  'http://praktikum-mesto.students.nomoredomains.rocks',
  'https://praktikum-mesto.students.nomoredomains.rocks',
  'http://:localhost:3000',
];

// console.log('Runcode in cors');
const verifyCors = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const ALLOWED_METHODS = 'GET, PUT, PATCH, POST, DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];
  if (allowedSites.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
    if (method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', ALLOWED_METHODS);
      res.header('Access-Control-Allow-Headers', requestHeaders);
      return res.end();
    }
  }
  return next();
};

module.exports = verifyCors;
