import DeepstreamServer from 'deepstream.io';

const C = DeepstreamServer.constants;

const server = new DeepstreamServer({
  host: '0.0.0.0',
  port: '${PORT}',
})

server.start()
