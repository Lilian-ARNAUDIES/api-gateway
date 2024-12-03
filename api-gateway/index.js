const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
require('dotenv').config();

app.use('/api/auth', proxy(process.env.AUTH_SERVICE_URL, {
  proxyReqPathResolver: (req) => {
    return `/auth${req.url}`; 
  }
}));

app.listen(process.env.PORT, () => {
  console.log(`API Gateway en cours d'exécution sur le port ${process.env.PORT}`);
});
