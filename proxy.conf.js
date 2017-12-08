const PROXY_CONFIG = [
  {
    context: [
      '/api',
    ],
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
