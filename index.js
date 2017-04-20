import DeepstreamServer from 'deepstream.io';
import MongoDBStorageConnector from 'deepstream.io-storage-mongodb';

const C = DeepstreamServer.constants;

const server = new DeepstreamServer({
  host: '0.0.0.0',
  port: '$PORT',
  connectionString: 'mongodb://deepstreamapp:neil1250978@ds161410.mlab.com:61410/deepstream-app',
  splitChar: '/'
})

server.start()
