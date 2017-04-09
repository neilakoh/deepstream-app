import DeepstreamServer from 'deepstream.io';

const C = DeepstreamServer.constants;

const server = new DeepstreamServer({
  host: '192.168.43.195',
  port: 6020
})

server.start()
