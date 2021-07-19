var cors_proxy = require('cors-anywhere');

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 8080;

cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log(`Running CORS Anywhere on ${host}:${port}`);
});