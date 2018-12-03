import http from 'http';
import yakbak from 'yakbak';

const siteToPort = {
  'helvetica-scans': 57153,
  'hot-chocolate-scans': 57155,
  'jaiminis-box': 57154,
  'kirei-cake': 57156,
  'manga-here': 57157,
  'manga-rock': 57159,
  'manga-fox': 57171,
  'manga-stream': 57160,
  'manga-updates': 57161,
  mangadex: 57163,
  mangakakalot: 57171,
  'meraki-scans': 57165,
  'phoenix-serenade': 57166,
  'sen-manga': 57172,
  'sense-scans': 57168,
  'silent-sky-scans': 57169,
  'tuki-scans': 57170,
};

class AdapterVcrServer {
  constructor(adapter) {
    this.adapter = adapter;
    this.originalHost = adapter._getHost();
    this.port = siteToPort[adapter.id];

    if (!this.port) {
      const message = `Missing '${adapter.id}' test server port.
Add an entry for '${adapter.id}' to ./src/setup-tests.js`;

      throw new Error(message);
    }

    this.server = http.createServer(
      yakbak(this.originalHost, {
        dirname: `${__dirname}/adapters/__tapes__/${adapter.id}/`,
        noRecord: process.env.CI === 'true',
      }),
    );
  }

  listen() {
    return new Promise((resolve, reject) => {
      this.server.on('error', reject);
      this.server.listen(this.port, () => {
        const { port } = this.server.address();
        resolve(`http://localhost:${port}`);
      });
    });
  }

  async listenAndMock() {
    const url = await this.listen(this.port);
    this.adapter._getHost = jest.fn().mockReturnValue(url);
  }

  close() {
    this.server.close();
  }
}

global.AdapterVcrServer = AdapterVcrServer;
