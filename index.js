import DeepstreamServer from 'deepstream.io';

const C = DeepstreamServer.constants;

const server = new DeepstreamServer({
  host: 'deepstream-app.herokuapp.com',
  port: port
})

server.start()
