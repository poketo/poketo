import http from 'http';
import yakbak from 'yakbak';

global.createVcrServer = host => {
  const proxy = yakbak(host, {
    dirname: __dirname + '/adapters/__tapes__',
  });
  const server = http.createServer(proxy);

  return {
    listen: port =>
      new Promise((resolve, reject) => {
        server.on('error', reject);
        server.listen(port, () => {
          const { port } = server.address();
          resolve(`http://localhost:${port}`);
        });
      }),
    close: () => {
      server.close();
    },
  };
};
