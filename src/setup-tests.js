import http from 'http';
import yakbak from 'yakbak';

class AdapterVcrServer {
  constructor(adapter) {
    this.adapter = adapter;
    this.originalHost = adapter._getHost();
    this.server = http.createServer(
      yakbak(this.originalHost, {
        dirname: `${__dirname}/adapters/__tapes__/${adapter.id}/`,
        noRecord: process.env.CI === 'true',
      }),
    );
  }

  listen(port) {
    return new Promise((resolve, reject) => {
      this.server.on('error', reject);
      this.server.listen(port, () => {
        const { port } = this.server.address();
        resolve(`http://localhost:${port}`);
      });
    });
  }

  async listenAndMock(port) {
    const url = await this.listen(port);
    this.adapter._getHost = jest.fn().mockReturnValue(url);
  }

  close() {
    this.server.close();
  }
}

global.AdapterVcrServer = AdapterVcrServer;
