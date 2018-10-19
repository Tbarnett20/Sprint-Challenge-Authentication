const { server } = require('./server.js');

server.get('/', (req, res) => {
  res.send('This thing running...')
});

const port = process.env.PORT || 9001;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
