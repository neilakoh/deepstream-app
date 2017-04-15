import DeepstreamServer from 'deepstream.io';

const C = DeepstreamServer.constants;

const server = new DeepstreamServer({
  host: 'deepstream-test.herokuapp.com',
  port: 80
})

server.start()
