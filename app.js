const express = require('express');
const app = express();

// get the port from env variable
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/health', (_req, res) => {
  res.send('ok');
});

app.get('/helloworld', (_req, res) => {
  res.send('Hello world!!!');
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
