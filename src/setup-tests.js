import http from 'http';
import yakbak from 'yakbak';

jest.mock('probe-image-size', () => () => ({
  width: 700,
  height: 1200,
}));

global.createVcrServer = adapter => {
  const proxy = yakbak(adapter._getHost(), {
    dirname: `${__dirname}/adapters/__tapes__/${adapter.id}/`,
    noRecord: process.env.CI === 'true',
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
