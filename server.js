let express = require('express');
let parser = require('body-parser');

// Initialize http server
const app = express();
app.use(parser);

// Launch the server on port 3000
const server = app.listen(3000, () => {
  const { port } = server.address();
  console.log(`Listening at ${port}`);
});