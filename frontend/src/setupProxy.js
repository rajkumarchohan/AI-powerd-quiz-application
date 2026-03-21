const { createProxyMiddleware } = require('http-proxy-middleware');

/**
 * Proxy only /api to the backend. Other requests (e.g. hot-update, static) stay on the dev server.
 * This avoids "Proxy error" for /MERN-Quiz-App/main.*.hot-update.json (ECONNREFUSED).
 */
module.exports = function (app) {
  const target = process.env.REACT_APP_PROXY_TARGET || 'http://localhost:8080';
  app.use(
    '/api',
    createProxyMiddleware({
      target,
      changeOrigin: true,
    })
  );
};
