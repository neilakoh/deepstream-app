import DeepstreamServer from 'deepstream.io';

const C = DeepstreamServer.constants;

const server = new DeepstreamServer({
  host: '107.22.247.81',
  port: '80'
})

server.start()
