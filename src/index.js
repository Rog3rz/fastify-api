const fastify = require("fastify")({
  logger: true,
});
const tasksRoutes = require("./routes/tasks.routes");
require('./utils/mongoose');

fastify.get("/", (request, reply) => {
  reply.send({ hello: "world" });
});

tasksRoutes.forEach((route) =>{
    fastify.route(route);
});

const start = async () => {
  await fastify.listen({ port: 3000 });
  fastify.log.info(`Server running on ${fastify.server.address().port}`);
};

start();
